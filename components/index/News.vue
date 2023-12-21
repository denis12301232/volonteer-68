<script setup lang="ts">
const { t, d } = useI18n();
const localeRoute = useLocaleRoute();
const { data, pending } = useFetch('/api/report', { query: { limit: 10, skip: 0 } });
</script>

<template>
  <div
    v-animateonscroll="{
      enterClass: 'transition-opacity duration-500 ease-in opacity-100',
      threshold: [0.1],
    }"
    class="mt-7 flex flex-col items-center px-3 pb-24 pt-3"
  >
    <h1 class="text-center text-4xl font-normal sm:text-6xl" id="news">
      {{ t('main.news.title') }}
    </h1>
    <div class="mt-7 w-full max-w-5xl">
      <ProgressSpinner v-if="pending" aria-label="Loading" />
      <Card v-else v-for="report of data?.reports" :key="report._id" class="w-64 bg-slate-200">
        <template #title>{{ report.title }}</template>
        <template #subtitle>{{ d(report.createdAt) }}</template>
        <template #footer>
          <NuxtLink :to="localeRoute({ name: 'news-report-id', params: { id: report._id } })">
            <Button
              class="dark:border-blue-600 dark:bg-blue-600 dark:text-white"
              :label="t('main.news.messages.open')"
            />
          </NuxtLink>
        </template>
      </Card>
    </div>
  </div>
</template>
