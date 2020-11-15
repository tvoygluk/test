export const API_HOST = process.env.API_HOST as string;

export enum ProcessEnum {
  INITIAL = 'INITIAL',
  REQUESTED = 'REQUESTED',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const KEYBOARD_KEYS = {
  ESCAPE: 'Escape',
} as const;

const PUBLIC_PATH = process.env.PUBLIC_PATH as string;

export const ROUTES = {
  HOME: PUBLIC_PATH,
  STORYBOOK: `${PUBLIC_PATH}storybook`,
  VENDOR_ROOT: `${PUBLIC_PATH}vendor`,
  VENDOR_ITEM: `${PUBLIC_PATH}vendor/:id`,
} as const;
