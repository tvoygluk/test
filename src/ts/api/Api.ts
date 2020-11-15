/*
  TODO:
  - find out contract for business errors (codes, messages)
  - add GTM for error stats collection
*/

enum ResponseStatus {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

enum MethodEnum {
  GET = 'GET',
  POST = 'POST',
}

const createHeaders = () => {
  const headers = new Headers();
  headers.append('accept', 'text/plain');
  headers.append('Content-Type', 'application/json');
  return headers;
};

interface IApi {
  send(
    url: string,
    method: MethodEnum,
    payload?: any,
  ): Promise<any>;
  get(url: string): Promise<any>;
  post(url: string, payload?: any): Promise<any>;
}

export class Api implements IApi {
  private async send(url: string, method: MethodEnum, payload?: any): Promise<any> {
    const options = {
      body: JSON.stringify(payload ?? {}),
      headers: createHeaders(),
      method,
    };

    const response = await globalThis.fetch(url, options);

    if (!response.ok && response.status !== ResponseStatus.BAD_REQUEST) {
      throw new Error(`Can't fetch data`);
    }

    const bodyAsText = await response.text();

    if (bodyAsText === '') {
      return;
    }

    return JSON.parse(bodyAsText);
  }

  protected get(url: string): Promise<any> {
    return this.send(url, MethodEnum.GET);
  }

  protected post(url: string, payload?: any): Promise<any> {
    return this.send(url, MethodEnum.POST, payload);
  }
}
