<script setup lang="ts">
const head = useLocaleHead({ addDirAttribute: true, identifierAttribute: 'id', addSeoAttributes: true });
</script>

<template>
   <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir" />
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>
