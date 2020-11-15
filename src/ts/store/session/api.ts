import { API_HOST } from 'ts/constants';
import { Api } from 'ts/api';

const SERVICE = `${API_HOST}/Session`;

const ENDPOINTS = {
  APPROVE: `${SERVICE}/SessionApprove`,
  CHECK: `${SERVICE}/SessionCheck`,
  CLOSE: `${SERVICE}/SessionClose`,
  CREATE: `${SERVICE}/SessionCreate`,
} as const;

class SessionApi extends Api {
  public approve(payload) {
    return this.post(ENDPOINTS.APPROVE, payload);
  }

  public check(payload) {
    return this.post(ENDPOINTS.CHECK, payload);
  }

  public close(payload) {
    return this.post(ENDPOINTS.CLOSE, payload);
  }

  public create(payload) {
    return this.post(ENDPOINTS.CREATE, payload);
  }
}

export const sessionApi = new SessionApi();
