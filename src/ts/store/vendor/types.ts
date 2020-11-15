import { ProcessEnum } from 'ts/constants';

import { ICustomer } from '../types';

interface INote {
  caption: string;
  content: string;
  customer: ICustomer;
  id: string;
  time: string;
  vendorId: string;
}

export interface IVendorService {
  id: string;
  discount?: number;
  duration: number;
  name: string;
  price: number;
  vendorId: string;
}

type GeoPositionCoordinate = string | number;

export interface IVendor {
  address: string;
  distance: number;
  geoPositionLatitude: GeoPositionCoordinate;
  geoPositionLongitude: GeoPositionCoordinate;
  id: string;
  masters: any[];
  name: string;
  notes: INote[] | null;
  portfolios: any;
  ratingCount: number;
  ratingValue: number;
  services: IVendorService[];
}

interface IVendorData {
  list: IVendor[];
  current: IVendor | null;
}

interface IVendorProcess {
  vendors: ProcessEnum;
  vendorById: ProcessEnum;
}

export interface IVendorState {
  data: IVendorData;
  process: IVendorProcess;
}
