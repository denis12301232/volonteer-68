<script setup lang="ts">
const loading = ref(true);
const { t } = useI18n();
const route = useRoute();
definePageMeta({ layout: 'simple' });
useSeoMeta({
  title: `${t('news.report.pageTitle')} | Волонтер 68, Харків`,
  description: t('news.report.pageTitle'),
});
const { $api } = useNuxtApp();
const params = reactive({ id: computed(() => String(route.params.id)) });
const { data: report } = $api.report.show(params, { watch: [params] });

function onLoad() {
  loading.value = false;
}
</script>

<template>
  <div v-if="loading" class="flex h-screen w-screen items-center justify-center">
    <Wheel class="text-blue-700" size="50" />
  </div>
  <iframe
    v-if="report?.link"
    v-show="!loading"
    class="h-screen w-screen"
    name="report"
    :src="`https://drive.google.com/file/d/${report.fileId}/preview`"
    @load="onLoad"
  ></iframe>
</template>
