import { API_HOST } from 'ts/constants';
import { Api } from 'ts/api';

import type { IVendor } from './types';

const SERVICE = `${API_HOST}/Vendor`;

const ENDPOINTS = {
  VENDORS: `${SERVICE}/Vendors`,
  VENDOR: `${SERVICE}/Vendor`,
} as const;

class VendorApi extends Api {
  public async getVendorById(id: string) {
    const url = `${ENDPOINTS.VENDOR}/${id}`;
    // TODO: find out bug in method
    // return this.get(url);

    // NOTE: workaround
    try {
      const response = await globalThis.fetch(url);
      return await response.json() as IVendor;
    } catch (error) {
      console.log('getVendorById:', error);
    }
  }

  public getVendors() {
    return this.post(ENDPOINTS.VENDORS);
  }
}

export const vendorApi = new VendorApi();
