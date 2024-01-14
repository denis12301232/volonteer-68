<script setup lang="ts">
interface Props {
  size?: string;
}

defineProps<Props>();
</script>

<template>
  <Icon class="animate-spin-slow" name="eva:loader-outline" :size="size" />
</template>
