<script setup lang="ts">
const theme = useTheme();

function onChange() {
  theme.value === 'dark' ? (theme.value = 'light') : (theme.value = 'dark');
}
</script>

<template>
  <Button class="focus:ring-0" aria-label="theme" outlined text rounded @click="onChange">
    <Icon class="text-yellow-500" :name="theme === 'dark' ? 'prime:moon' : 'prime:sun'" />
  </Button>
</template>
