<script setup lang="ts">
const router = useRouter();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

watchEffect(() => Promise.resolve(switchLocalePath(locale.value)).then((path) => router.push(path)));
</script>

<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>
