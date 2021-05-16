// Theme
interface IThemeDefault {
  background: string;
  color: string;
}

interface IThemePage {
  dark: IThemeDefault
  light: IThemeDefault
}

export interface IThemeElement {
  [key:string] : IThemeDefault;
  primary: IThemeDefault
  secondary: IThemeDefault
  stop: IThemeDefault
}

export interface ITheme {
  page: IThemePage;
}

// User
export interface IUser {
  id: number;
  name: string;
  image?: string;
  muted: boolean;
  active: boolean;
}