import { Pluralization } from '~/i18n';

export default defineI18nConfig(() => ({
   legacy: false,
   locale: 'uk',
   fallbackLocale: 'uk',
   messages: {},
   pluralizationRules: {
      uk: Pluralization.slavic,
   },
   
}));
