<script setup lang="ts">
definePageMeta({ layout: 'project' });
const { t } = useI18n();
const localeRoute = useLocaleRoute();
</script>

<template>
  <div class="mt-5 flex flex-col items-center p-5">
    <h1 class="text-center text-4xl sm:text-5xl">{{ t('layout.default.nav.projects') }}</h1>
    <ul class="mt-5 max-w-7xl text-center text-xl sm:text-2xl">
      <li v-for="id in 12" class="mt-3">
        <UiLink :to="localeRoute({ name: 'project-id', params: { id } })">
          {{ t(`layout.default.menu.projects.${id - 1}`) }}
        </UiLink>
      </li>
    </ul>
  </div>
</template>
