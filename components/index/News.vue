<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div class="flex flex-col items-center px-3 pb-24 pt-3">
      <h1
         v-animateonscroll:once="{ enterClass: 'transition-opacity ease-in duration-700 opacity-100', leaveClass: 'transition-opacity ease-in duration-700 opacity-100' }"
         class="my-7 text-center text-5xl font-normal"
         id="news"
      >
         {{ t('main.news.title') }}
      </h1>
      <div class="w-full max-w-5xl">
         <Card class="w-64 !bg-slate-200">
            <template #title>{{ t('main.news.messages.title') }}</template>
            <template #subtitle>{{ t('main.news.messages.date') }}</template>
            <template #footer>
               <NuxtLink :to="{ name: 'news-report-2022' }">
                  <Button :label="t('main.news.messages.open')" />
               </NuxtLink>
            </template>
         </Card>
      </div>
   </div>
</template>
