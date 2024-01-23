<script setup lang="ts">
const { t, d } = useI18n();
const localeRoute = useLocaleRoute();
const query = reactive({ limit: 10, skip: 0 });
const { $api } = useNuxtApp();
const { data, pending } = $api.report.index(query, { watch: [query] });

definePageMeta({ layout: 'default' });
useSeoMeta({
  title: `${t('news.pageTitle')} | Волонтер 68, Харків`,
  description: t('news.pageTitle'),
});

function onPage(e: { page: number; first: number; rows: number; pageCount?: number }) {
  query.skip = e.rows * e.page;
}

function onUpdateRows(rows: number) {
  query.limit = rows;
}
</script>

<template>
  <div class="m-auto flex h-full w-full flex-col sm:w-2/3">
    <div v-if="pending" class="flex flex-auto items-center justify-center">
      <Wheel class="text-primary-800" size="50" aria-label="Loading" />
    </div>
    <div v-else class="flex flex-auto flex-col gap-4 py-4">
      <NuxtLink
        v-for="report of data?.reports"
        class="mx-auto block w-11/12 cursor-pointer rounded-sm bg-slate-100 px-5 pb-12 pt-6 transition-all duration-300 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700"
        :key="report.id"
        :to="localeRoute({ name: 'news-report-id', params: { id: report.id } })"
      >
        <div>{{ d(report.createdAt) }}</div>
        <div class="text-xl font-medium">{{ report.title }}</div>
      </NuxtLink>
    </div>
    <Paginator
      class="mt-2"
      :rows="query.limit"
      :totalRecords="data?.total"
      :rowsPerPageOptions="[10, 20]"
      @update:rows="onUpdateRows"
      @page="onPage"
    />
  </div>
</template>
