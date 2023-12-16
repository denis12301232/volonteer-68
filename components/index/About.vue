<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div
      v-animateonscroll="{
         enterClass: 'transition-opacity duration-500 ease-in opacity-100',
         threshold: [0.1],
      }"
      class="flex flex-col items-center bg-slate-300 p-7 dark:bg-slate-600"
   >
      <h1 class="mb-7 text-center text-4xl sm:text-6xl" id="about">
         {{ t('main.about.title') }}
      </h1>
      <div class="max-w-5xl text-lg" v-html="t('main.about.text')"></div>
   </div>
</template>
