<script setup lang="ts">
const router = useRouter();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

watchEffect(() => Promise.resolve(switchLocalePath(locale.value)).then((path) => router.push(path)));
</script>

<template>
      <!-- <ScrollPanel
      class="h-full w-full"
      :pt-options="{ mergeProps: true, mergeSections: true }"
      :pt="{ bary: 'bg-gray-400 hover:bg-gray-500 focus:outline-none' }"
   ></ScrollPanel> -->
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>
