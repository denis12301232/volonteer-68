<script setup lang="ts">
const { t, d } = useI18n();
const localeRoute = useLocaleRoute();
const query = reactive({ limit: 4, skip: 0 });
const { $api } = useNuxtApp();
const { data, pending } = await $api.report.index(query);
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
      {{ t('index.news.title') }}
    </h1>
    <div class="mt-8 flex w-full max-w-6xl flex-wrap gap-4">
      <div v-if="pending" class="flex w-full justify-center py-10">
        <Wheel class="text-primary-700" aria-label="Loading" size="50" />
      </div>
      <Card v-else v-for="report of data?.reports" :key="report.id" class="mt-4 w-64 bg-slate-200">
        <template #title>{{ report.title }}</template>
        <template #subtitle>{{ d(report.createdAt) }}</template>
        <template #footer>
          <NuxtLink :to="localeRoute({ name: 'news-report-id', params: { id: report.id } })">
            <Button class="w-fit" :label="t('index.news.messages.open')" />
          </NuxtLink>
        </template>
      </Card>
    </div>
  </div>
</template>
