<script setup lang="ts">
const loading = ref(true);
const { t } = useI18n();
const route = useRoute();
definePageMeta({ layout: 'simple' });
useSeoMeta({
  title: `${t('news.report.pageTitle')} | Волонтер 68, Харків`,
  description: t('news.report.pageTitle'),
});
const { data: report } = useFetch(`/api/report/${route.params.id}`, {
  watch: [() => route.params.id],
});

function onLoad() {
  loading.value = false;
}
</script>

<template>
  <div v-if="loading" class="flex h-screen w-screen items-center justify-center">
    <ProgressSpinner />
  </div>
  <iframe
    v-if="report?.file"
    v-show="!loading"
    class="h-screen w-full"
    :src="report.file"
    frameborder="0"
    @load="onLoad"
  ></iframe>
</template>
