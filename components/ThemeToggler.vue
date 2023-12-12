<script setup lang="ts">
const theme = useTheme();

function onChange() {
   theme.value === 'dark' ? (theme.value = 'light') : (theme.value = 'dark');
}
</script>

<template>
   <Button class="!border-none !text-yellow-500" aria-label="theme" outlined text rounded @click="onChange">
      <Icon :name="theme === 'dark' ? 'prime:moon' : 'prime:sun'" />
   </Button>
</template>
