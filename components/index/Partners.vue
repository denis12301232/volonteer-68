<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div
    v-animateonscroll="{
      enterClass: 'transition-opacity duration-500 ease-in opacity-100',
      threshold: [0.1],
    }"
    class="flex flex-col items-center"
    id="partners"
  >
    <div class="flex w-full flex-col justify-center bg-slate-300 py-10 dark:bg-slate-600 sm:py-20 md:flex-row">
      <h1 class="border-r pb-10 pt-0 text-center text-4xl sm:text-6xl md:border-white md:pb-0 md:pr-5 md:pt-20">
        {{ t('index.partners.title') }}
      </h1>
      <div class="m-auto px-10 md:m-0">
        <ul class="list-disc">
          <li>
            <UiLink
              href="https://kharkivoda.gov.ua/oblasna-derzhavna-administratsiya/struktura-administratsiyi/strukturni-pidrozdili/139"
              target="_blank"
              border
              dashed
            >
              Департамент соціального захисту Харківської ОВА
            </UiLink>
          </li>
          <li>
            <UiLink
              href="https://kharkivoda.gov.ua/oblasna-derzhavna-administratsiya/struktura-administratsiyi/strukturni-pidrozdili/143"
              target="_blank"
              border
              dashed
            >
              Департамент цивільного захисту Харківської ОВА
            </UiLink>
          </li>
          <li>
            <UiLink
              href="https://www.city.kharkiv.ua/uk/gorodskaya-vlast/ispolnitelnyie-organyi/rajonnyie-administraczii/kominternovskij-rajon/administracziya.html"
              target="_blank"
              border
              dashed
            >
              Адміністрація Слобідського району Харківської міської ради
            </UiLink>
          </li>
          <li>
            <UiLink href="https://www.pz.gov.ua/" target="_blank" border dashed>
              Адміністрація Харківського вокзалу Південної залізниці
            </UiLink>
          </li>
        </ul>
        <ul class="mt-10 list-disc">
          <li>
            <UiLink href="https://purple-vest.net" target="_blank" border dashed>Purple Vest Mission</UiLink>
          </li>
          <li>
            <UiLink href="https://www.aisrael.org/eng" target="_blank" border dashed>Access Israel</UiLink>
          </li>
          <li>
            <UiLink href="https://novaukraine.org" target="_blank" border dashed>Nova Ukraine</UiLink>
          </li>
          <li>
            <UiLink href="https://vostok-sos.org" target="_blank" border dashed>
              Благодійна організація «БФ "Восток-Сос"»
            </UiLink>
          </li>
          <li>
            <UiLink href="https://wphfund.org" target="_blank" border dashed> Women’s Pease&Humanitarian Fund </UiLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex w-full flex-col items-center bg-gray-400 p-7 text-center text-2xl dark:bg-gray-700">
      <div class="max-w-4xl">
        {{ t('index.partners.messages.work') }}
      </div>
      <div class="max-w-4xl">{{ t('index.partners.messages.thanks') }}</div>
    </div>
  </div>
</template>
