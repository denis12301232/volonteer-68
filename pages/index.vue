<script setup lang="ts">
const { t } = useI18n();
const loading = ref(true);
definePageMeta({ layout: 'default' });
useSeoMeta({ title: `${t('main.pageTitle')} | Волонтер 68, Харків`, description: t('main.pageTitle') });

function onLoad() {
   loading.value = false;
}
</script>

<template>
   <div class="relative mt-4 flex justify-center">
      <NuxtImg
         class="aspect-auto w-full max-w-6xl"
         width="1280"
         height="626"
         src="/images/team.webp"
         alt="team"
         :placeholder="[1280, 626]"
         @load="onLoad"
      />
      <div class="-translate-2/4 absolute top-1/2 text-white">
         <div class="flex items-start">
            <NuxtImg sizes="40px sm:96px" src="/images/logo-big.webp" alt="logo" placeholder />
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
