export const useLang = () => useState('lang', () => localStorage.getItem('lang') || 'uk');
