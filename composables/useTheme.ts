import type { ITheme } from '~/types';

const isDark = usePreferredDark();
const theme = computed(() => (isDark.value ? 'dark' : 'light'));

export const useTheme = () =>
  useCookie<ITheme>('theme', { default: () => theme.value, sameSite: 'strict', watch: 'shallow' });
