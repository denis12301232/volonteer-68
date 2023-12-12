import type { ITheme } from '~/types';

export const useTheme = () =>
   useCookie<ITheme>('theme', { default: () => 'light', sameSite: 'strict', watch: 'shallow' });
