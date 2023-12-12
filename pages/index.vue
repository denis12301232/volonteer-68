<script setup lang="ts">
const { t } = useI18n();
definePageMeta({ layout: 'default' });
useSeoMeta({ title: `${t('main.pageTitle')} | Волонтер 68, Харків`, description: t('main.pageTitle') });
</script>

<template>
   <div class="relative mt-4 flex justify-center">
      <div class="w-full max-w-7xl">
         <NuxtImg
            class="select-none"
            src="/images/team.webp"
            width="1280"
            height="626"
            alt="team"
            :placeholder="[1280, 626]"
         />
      </div>
      <div class="-translate-2/4 absolute top-1/2 text-white">
         <div class="flex items-start">
            <div class="h-auto w-auto">
               <NuxtImg class="select-none" src="/images/logo-big.webp" sizes="40px sm:96px" alt="logo" />
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
