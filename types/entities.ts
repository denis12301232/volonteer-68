export type ITheme = 'dark' | 'light';
export interface IPartner {
  logo: string;
  href: string;
  width: string | number;
  height: string | number;
  background: string;
}

export interface IReport {
  id: number;
  title: string;
  link: string;
  fileId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IApiError<E = unknown> {
  name: string;
  message: string;
  errors?: E;
}
