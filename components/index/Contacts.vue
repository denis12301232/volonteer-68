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
    class="p-7"
  >
    <h1 class="text-center text-4xl sm:text-6xl" id="contacts">{{ t('main.contacts.title') }}</h1>
    <div class="flex flex-col justify-around sm:flex-row">
      <div class="pt-8">
        <h2 class="text-center text-2xl sm:text-left">{{ t('main.contacts.messages.help') }}</h2>
        <ul class="mt-10 flex flex-col">
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="prime:phone" />
            </div>
            <span class="ml-2 font-bold">{{ t('main.contacts.messages.hotLine') }}:</span>
            <UiLink class="ml-2 flex items-center text-sm italic" :href="`tel:${config.public.PHONE_HOT_LINE}`">
              {{ config.public.PHONE_HOT_LINE }}
            </UiLink>
          </li>
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="fa6-solid:wheelchair-move" />
            </div>
            <span class="ml-2 font-bold">{{ t('main.contacts.messages.invoTaxi') }}:</span>
            <UiLink class="ml-2 flex items-center text-sm italic" :href="`tel:${config.public.PHONE_INVO_TAXI}`">
              {{ config.public.PHONE_INVO_TAXI }}
            </UiLink>
            <span class="ml-2">(Інна)</span>
          </li>
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="material-symbols:ambulance-sharp" />
            </div>
            <span class="ml-2 font-bold">{{ t('main.contacts.messages.evacuation') }}:</span>
            <UiLink class="ml-2 flex items-center text-sm italic" :href="`tel:${config.public.PHONE_EVACUATION}`">
              {{ config.public.PHONE_EVACUATION }}
            </UiLink>
            <span class="ml-2">(Сергій)</span>
          </li>
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="prime:phone" />
            </div>
            <span
              v-tooltip.top="{ value: t('main.contacts.messages.violence'), showDelay: 1000, hideDelay: 300 }"
              class="ml-2 overflow-hidden text-ellipsis whitespace-nowrap font-bold"
            >
              {{ t('main.contacts.messages.violence') }}:
            </span>
            <UiLink class="ml-2 flex items-center whitespace-nowrap text-sm italic" href="tel:1547">1547</UiLink>
            <span class="px-2 text-lg">|</span>
            <UiLink class="text-sm italic" href="tel:116123">116123</UiLink>
          </li>
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="prime:telegram" />
            </div>
            <span class="ml-2 font-bold">{{ t('main.contacts.messages.telegram') }}:</span>
            <UiLink
              class="ml-2 flex items-center text-sm italic"
              :href="`https://t.me/${config.public.TELEGRAM}`"
              target="_blank"
            >
              @{{ config.public.TELEGRAM }}
            </UiLink>
          </li>
        </ul>
      </div>
      <div class="pt-8">
        <h2 class="text-center text-2xl sm:text-left">
          {{ t('main.contacts.messages.bisness') }}
        </h2>
        <ul class="mt-10 flex flex-col">
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="prime:envelope" />
            </div>
            <UiLink class="ml-2 flex items-center" :href="`mailto:${config.public.EMAIL}`">
              {{ config.public.EMAIL }}
            </UiLink>
          </li>
          <li class="mt-1 flex items-center">
            <div>
              <Icon name="prime:instagram" />
            </div>
            <UiLink class="ml-2 flex items-center" :href="`https://www.instagram.com/${config.public.INSTAGRAM}`">
              @{{ config.public.INSTAGRAM }}
            </UiLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
