export interface ISessionData {
  customerName: string;
  approved: boolean;
  code: string | null;
  phone: string;
  timeoutSeconds: number;
  token: string;
}
