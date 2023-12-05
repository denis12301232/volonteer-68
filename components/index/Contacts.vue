<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();
</script>

<template>
   <div
      v-animateonscroll="{ enterClass: 'transition-opacity ease-in duration-700 opacity-100', leaveClass: '' }"
      class="flex flex-col items-center p-7"
   >
      <h1 class="mb-7 mt-16 text-center text-6xl" id="contacts">{{ t('main.contacts.title') }}</h1>
      <div class="flex w-full flex-wrap justify-between md:justify-around">
         <div>
            <h3 class="text-2xl">{{ t('main.contacts.messages.help') }}</h3>
            <ul class="mt-10 flex flex-col">
               <li class="mt-1 flex items-center">
                  <i class="pi pi-phone"></i>
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.hotLine') }}:</span>
                  <UiLink class="flex items-center text-sm italic" :href="`tel:${config.public.PHONE_HOT_LINE}`">
                     <span class="ml-2">{{ config.public.PHONE_HOT_LINE }}</span>
                  </UiLink>
               </li>
               <li class="mt-1 flex items-center">
                  <img class="h-5 w-5" src="~/assets/icons/invo-taxi.png" alt="phone" />
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.invoTaxi') }}:</span>
                  <UiLink class="flex items-center text-sm italic" :href="`tel:${config.public.PHONE_INVO_TAXI}`">
                     <span class="ml-2">{{ config.public.PHONE_INVO_TAXI }}</span>
                  </UiLink>
                  <span class="ml-2">(Інна)</span>
               </li>
               <li class="mt-1 flex items-center">
                  <img class="h-5 w-5" src="~/assets/icons/evacuation.png" alt="phone" />
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.evacuation') }}:</span>
                  <UiLink class="flex items-center text-sm italic" :href="`tel:${config.public.PHONE_EVACUATION}`">
                     <span class="ml-2">{{ config.public.PHONE_EVACUATION }}</span>
                  </UiLink>
                  <span class="ml-2">(Сергій)</span>
               </li>
               <li class="mt-1 flex items-center">
                  <i class="pi pi-phone"></i>
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.violence') }}:</span>
                  <UiLink class="flex items-center text-sm italic">
                     <span class="ml-2">1547, 116123</span>
                  </UiLink>
               </li>
               <li class="mt-1 flex items-center">
                  <i class="pi pi-telegram"></i>
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.telegram') }}:</span>
                  <UiLink
                     class="flex items-center text-sm italic"
                     :href="`https://t.me/${config.public.TELEGRAM}`"
                     target="_blank"
                  >
                     <span class="ml-2">@{{ config.public.TELEGRAM }}</span>
                  </UiLink>
               </li>
            </ul>
         </div>
         <div class="mt-8 sm:mt-0">
            <h3 class="text-2xl">{{ t('main.contacts.messages.bisness') }}</h3>
            <ul class="mt-10 flex flex-col">
               <li class="mt-1 flex items-center">
                  <i class="pi pi-envelope"></i>
                  <UiLink class="ml-2 flex items-center" :href="`mailto:${config.public.EMAIL}`">
                     {{ config.public.EMAIL }}
                  </UiLink>
               </li>
               <li class="mt-1 flex items-center">
                  <i class="pi pi-instagram"></i>
                  <UiLink class="ml-2 flex items-center" :href="`https://www.instagram.com/${config.public.INSTAGRAM}`">
                     @{{ config.public.INSTAGRAM }}
                  </UiLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
