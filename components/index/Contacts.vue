<script setup lang="ts">
const { t } = useI18n();
const config = useRuntimeConfig();
</script>

<template>
   <div
      v-animateonscroll="{
         enterClass: 'transition-opacity duration-500 ease-in opacity-100',
         threshold: [0.1],
      }"
      class="flex flex-col items-center p-7"
   >
      <h1 class="text-center text-4xl sm:text-6xl" id="contacts">{{ t('main.contacts.title') }}</h1>
      <div class="flex w-full flex-wrap justify-between md:justify-around">
         <div class="basis-full pt-8 sm:basis-auto">
            <h2 class="text-center text-2xl sm:text-left">{{ t('main.contacts.messages.help') }}</h2>
            <ul class="mt-10 flex flex-col">
               <li class="mt-1 flex items-center">
                  <Icon name="prime:phone" />
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.hotLine') }}:</span>
                  <UiLink class="flex items-center text-sm italic" :href="`tel:${config.public.PHONE_HOT_LINE}`">
                     <span class="ml-2">{{ config.public.PHONE_HOT_LINE }}</span>
                  </UiLink>
               </li>
               <li class="mt-1 flex items-center">
                  <Icon name="fa6-solid:wheelchair-move" />
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.invoTaxi') }}:</span>
                  <UiLink class="flex items-center text-sm italic" :href="`tel:${config.public.PHONE_INVO_TAXI}`">
                     <span class="ml-2">{{ config.public.PHONE_INVO_TAXI }}</span>
                  </UiLink>
                  <span class="ml-2">(Інна)</span>
               </li>
               <li class="mt-1 flex items-center">
                  <Icon name="material-symbols:ambulance-sharp" />
                  <span class="ml-2 font-bold">{{ t('main.contacts.messages.evacuation') }}:</span>
                  <UiLink class="flex items-center text-sm italic" :href="`tel:${config.public.PHONE_EVACUATION}`">
                     <span class="ml-2">{{ config.public.PHONE_EVACUATION }}</span>
                  </UiLink>
                  <span class="ml-2">(Сергій)</span>
               </li>
               <li class="mt-1 flex items-center">
                  <Icon name="prime:phone" />
                  <span
                     v-tooltip.top="{ value: t('main.contacts.messages.violence'), showDelay: 1000, hideDelay: 300 }"
                     class="ml-2 basis-1/2 overflow-hidden text-ellipsis whitespace-nowrap font-bold"
                  >
                     {{ t('main.contacts.messages.violence') }}:
                  </span>
                  <UiLink class="flex items-center text-sm italic">
                     <span class="ml-2">1547, 116123</span>
                  </UiLink>
               </li>
               <li class="mt-1 flex items-center">
                  <Icon name="prime:telegram" />
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
         <div class="basis-full pt-8 sm:basis-auto">
            <h2 class="text-center text-2xl sm:text-left">
               {{ t('main.contacts.messages.bisness') }}
            </h2>
            <ul class="mt-10 flex flex-col">
               <li class="mt-1 flex items-center">
                  <Icon name="prime:envelope" />
                  <UiLink class="ml-2 flex items-center" :href="`mailto:${config.public.EMAIL}`">
                     {{ config.public.EMAIL }}
                  </UiLink>
               </li>
               <li class="mt-1 flex items-center">
                  <Icon name="prime:instagram" />
                  <UiLink class="ml-2 flex items-center" :href="`https://www.instagram.com/${config.public.INSTAGRAM}`">
                     @{{ config.public.INSTAGRAM }}
                  </UiLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
