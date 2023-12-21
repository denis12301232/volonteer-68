<script setup lang="ts">
const src = 'https://docs.google.com/forms/d/e/1FAIpQLScXVrOShlFBkR6i8OFxPDQiOU3SUmBxjKxGV2l1WqQfrffTwQ/viewform';
const loading = ref(true);
const { t } = useI18n();

definePageMeta({ layout: 'simple' });
useSeoMeta({ title: `${t('googleForm.pageTitle')} | Волонтер 68, Харків`, description: t('googleForm.pageTitle') });

function onLoad() {
  loading.value = false;
}

function onError(e: Event) {
  console.error(e);
}
</script>

<template>
  <div v-show="loading" class="flex h-screen w-screen items-center justify-center">
    <ProgressSpinner />
  </div>
  <iframe
    v-show="!loading"
    class="h-screen w-screen"
    name="google-form"
    :src="src"
    @load="onLoad"
    @error="onError"
  ></iframe>
</template>
