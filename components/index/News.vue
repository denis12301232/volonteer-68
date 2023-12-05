<script setup lang="ts">
const { t, d } = useI18n();
const route = useLocaleRoute();
const { data, pending } = useFetch('/api/report', { query: { limit: 10, skip: 0 } });
</script>

<template>
   <div class="flex flex-col items-center px-3 pb-24 pt-3">
      <h1
         v-animateonscroll="{
            enterClass: 'transition-opacity ease-in duration-700 opacity-100',
            leaveClass: '',
         }"
         class="my-7 text-center text-5xl font-normal"
         id="news"
      >
         {{ t('main.news.title') }}
      </h1>
      <div class="w-full max-w-5xl">
         <ProgressSpinner v-if="pending" aria-label="Loading" />
         <Card v-else v-for="report of data?.reports" :key="report._id" class="w-64 !bg-slate-200">
            <template #title>{{ report.title }}</template>
            <template #subtitle>{{ d(report.createdAt) }}</template>
            <template #footer>
               <NuxtLink :to="route({ name: 'news-report-id', params: { id: report._id } })">
                  <Button :label="t('main.news.messages.open')" />
               </NuxtLink>
            </template>
         </Card>
      </div>
   </div>
</template>
