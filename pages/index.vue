<script setup lang="ts">
const { t } = useI18n();
definePageMeta({ layout: 'default' });
useSeoMeta({ title: `${t('main.pageTitle')} | Волонтер 68, Харків` });
</script>

<template>
   <div class="relative mt-4 flex justify-center">
      <NuxtImg class="w-full max-w-6xl" src="/images/team.webp" alt="team" />
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
