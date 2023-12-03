<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div class="flex flex-col items-center bg-slate-300 p-7">
      <h1
         v-animateonscroll="{ enterClass: 'transition-opacity ease-in duration-500 opacity-100', leaveClass: '' }"
         class="mb-7 text-center text-5xl"
         id="about"
      >
         {{ t('main.about.title') }}
      </h1>
      <div class="max-w-5xl text-lg" v-html="t('main.about.text')"></div>
   </div>
</template>
