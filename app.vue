<script setup lang="ts">
const head = useLocaleHead({ addDirAttribute: true, identifierAttribute: 'id', addSeoAttributes: true });
const theme = useTheme();
</script>

<template>
   <Html
      :lang="head.htmlAttrs?.lang"
      :dir="head.htmlAttrs?.dir"
      :class="[
         theme === 'dark' ? 'dark' : 'light',
         {
            'bg-slate-950': theme === 'dark',
            'text-white': theme === 'dark',
         },
      ]"
   />
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>
