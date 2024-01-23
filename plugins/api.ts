import { Module } from '~/common/repository/modules';

export default defineNuxtPlugin((nuxtApp) => {
  const $api = $fetch.create({ baseURL: nuxtApp.$config.public.API_URL });
  const modules = {
    report: new Module.Report($api),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
