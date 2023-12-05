<script setup lang="ts">
const { t, d } = useI18n();
const route = useLocaleRoute();
const { data, pending } = useFetch(`/api/report`, { query: { limit: 10, skip: 0 } });
definePageMeta({ layout: 'default' });
useSeoMeta({ title: `${t('news.pageTitle')} | Волонтер 68, Харків` });
</script>

<template>
   <div class="m-auto w-2/3">
      <Divider />
      <div v-if="pending" class="flex justify-center">
         <ProgressSpinner aria-label="Loading" />
      </div>
      <NuxtLink
         v-for="report of data?.reports"
         class="m-auto block w-11/12 cursor-pointer px-5 pb-12 pt-6 hover:bg-slate-50"
         :key="report._id"
         :to="route({ name: 'news-report-id', params: { id: report._id } })"
      >
         <div>{{ d(report.createdAt) }}</div>
         <div class="text-xl font-medium">{{ report.title }}</div>
      </NuxtLink>
      <Divider />
   </div>
</template>
