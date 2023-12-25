<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const id = computed(() => String(route.params.id));
definePageMeta({ layout: 'project' });
</script>

<template>
  <div class="flex h-full justify-center p-5">
    <h1
      v-html="t(`projectId.content.${+id - 1}`)"
      class="mt-5 max-w-screen-lg text-center text-3xl sm:text-4xl"
    ></h1>
  </div>
</template>
