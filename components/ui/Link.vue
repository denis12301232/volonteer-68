<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/app';

interface Props extends /* @vue-ignore */ NuxtLinkProps {
  dashed?: boolean;
  border?: boolean;
}
withDefaults(defineProps<Props>(), { dashed: false, border: false });
</script>

<template>
  <NuxtLink
    :class="[
      'hover:text-sky-400',
      'cursor-pointer',
      { 'border-b-2': border, 'border-dashed': dashed, 'hover:border-sky-400': dashed, 'border-gray-500': dashed },
    ]"
    :="$attrs"
  >
    <slot />
  </NuxtLink>
</template>
