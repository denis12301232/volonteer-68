<script setup lang="ts">
interface IError {
  statusCode: number;
  statusMessage: string;
  message: string;
}

const props = defineProps<{ error: IError }>();
const theme = useTheme();
useSeoMeta({ title: `${props.error.statusCode} | Волонтер 68, Харків` });

function handleError() {
  clearError({ redirect: '/' });
}
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
  />
  <NuxtLayout name="simple">
    <div class="flex h-screen flex-col items-center justify-center">
      <div class="flex items-center">
        <div class="text-7xl">{{ error.statusCode }}</div>
        <Divider layout="vertical" />
        <div class="text-lg">{{ error.statusMessage }}</div>
      </div>
      <Button class="mt-4 flex items-center w-fit p-2" outlined @click="handleError">
        <Icon name="prime:home" size="35" />
        <span class="ml-2 text-lg font-bold">Home</span>
      </Button>
    </div>
  </NuxtLayout>
</template>
