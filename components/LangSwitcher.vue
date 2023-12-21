<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const lang = computed({
  get() {
    return locale.value;
  },
  set(v) {
    setLocale(v);
  },
});
</script>

<template>
  <Dropdown v-model="lang" :options="locales" option-value="code" option-label="name" />
</template>
