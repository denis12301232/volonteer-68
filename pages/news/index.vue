<script setup lang="ts">
const { t } = useI18n();
const route = useLocaleRoute();
definePageMeta({ layout: 'default' });
useSeoMeta({ title: `${t('news.pageTitle')} | Волонтер 68, Харків` });
</script>

<template>
   <div class="m-auto w-2/3">
      <div class="border-t-2 border-black"></div>
      <NuxtLink
         class="m-auto block w-11/12 cursor-pointer border-b-2 pb-12 pt-6"
         :to="route({ name: 'news-report-2022' })"
      >
         <div>17 квіт. 2023 р.</div>
         <div class="text-xl font-medium">Звіт за 2022 рік</div>
      </NuxtLink>
   </div>
</template>
