import { ITheme, IThemeElement } from '../../types/interfaces.types';

export const theme: ITheme = {
  page: {
    dark: {
      background: "#322E2E",
      color: "#F6F4F4",
    },
    light: {
      background: "#F6F4F4",
      color: "#322E2E",
    },
  },
};

export const element: IThemeElement = {
  primary: {
    background: "#00e676",
    color: "#fff",
  },
  secondary: {
    background: "#00b0ff",
    color: "#F6F4F4",
  },
  stop: {
    background: "#ff5252",
    color: "#F6F4F4",
  },
};
