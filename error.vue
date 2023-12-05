<script setup lang="ts">
interface IError {
   statusCode: number;
   statusMessage: string;
   message: string;
}

const props = defineProps<{ error: IError }>();
useSeoMeta({ title: `${props.error.statusCode} | Волонтер 68, Харків` });

function handleError() {
   clearError({ redirect: '/' });
}
</script>

<template>
   <NuxtLayout name="simple">
      <div class="flex h-screen flex-col items-center justify-center">
         <div class="flex items-center">
            <div class="text-7xl">{{ error.statusCode }}</div>
            <Divider layout="vertical" />
            <div class="text-lg">{{ error.statusMessage }}</div>
         </div>
         <Button class="mt-4" icon="pi pi-home" label="Home" outlined @click="handleError" />
      </div>
   </NuxtLayout>
</template>
