<script setup lang="ts">
const head = useLocaleHead({ addDirAttribute: true, identifierAttribute: 'id', addSeoAttributes: true });
const theme = useTheme();
</script>

<template>
   <Html
      :class="[
         theme,
         {
            'bg-slate-950': theme === 'dark',
            'text-white': theme === 'dark',
         },
      ]"
      :lang="head.htmlAttrs?.lang"
      :dir="head.htmlAttrs?.dir"
   />
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>
