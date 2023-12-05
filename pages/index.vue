<script setup lang="ts">
const { t } = useI18n();
const loading = ref(true);
definePageMeta({ layout: 'default' });
useSeoMeta({ title: `${t('main.pageTitle')} | Волонтер 68, Харків` });

function onLoad() {
   loading.value = false;
}
</script>

<template>
   <div v-if="loading" class="m-auto mt-4 max-w-6xl">
      <Skeleton height="35rem" />
   </div>
   <div v-show="!loading" class="relative mt-4 flex justify-center">
      <NuxtImg class="w-full max-w-6xl" src="/images/team.webp" alt="team" @load="onLoad" />
      <div class="-translate-2/4 absolute top-1/2 text-white">
         <div class="flex items-start">
            <div>
               <NuxtImg class="w-10 sm:w-24" src="/images/logo-big.webp" alt="logo" />
            </div>
            <div>
               <div class="ml-4 text-2xl uppercase sm:text-7xl">{{ t('main.messages.title') }}</div>
               <div class="text-center text-sm font-medium sm:text-xl">{{ t('main.messages.slogan') }}</div>
            </div>
         </div>
      </div>
   </div>
   <IndexNews />
   <IndexAbout />
   <IndexDirections />
   <IndexContacts />
   <IndexDonate />
   <IndexPartners />
</template>
