<script setup lang="ts">
const { t } = useI18n();
const partners = [
  { logo: '/images/eef.svg', href: 'https://eef.org.ua' },
  { logo: '/images/unwomen.svg', href: 'https://www.unwomen.org' },
  { logo: '/images/wphfund.png', href: 'https://wphfund.org' },
  { logo: '/images/vostok-sos.svg', href: 'https://vostok-sos.org' },
  { logo: '/images/ednannia.png', href: 'https://ednannia.ua' },
  { logo: '/images/eda.png', href: 'https://www.eda.admin.ch/countries/ukraine/uk/home"' },
  { logo: '/images/purple-vest.svg', href: 'https://purple-vest.net' },
  { logo: '/images/aisrael.png', href: 'https://www.aisrael.org/eng' },
  { logo: '/images/novaukraine.svg', href: 'https://novaukraine.org' },
];
const kh = {
  logo: '/images/kharkiv.png',
  hrefs: [
    'https://kharkivoda.gov.ua/oblasna-derzhavna-administratsiya/struktura-administratsiyi/strukturni-pidrozdili/139',
    'https://kharkivoda.gov.ua/oblasna-derzhavna-administratsiya/struktura-administratsiyi/strukturni-pidrozdili/143',
    'https://www.city.kharkov.ua/uk/gorodskaya-vlast/ispolnitelnyie-organyi/rajonnyie-administraczii/kominternovskij-rajon/administracziya',
    'https://www.pz.gov.ua',
  ],
};
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
    <h1 class="mt-5 text-center text-4xl sm:mt-10 sm:text-6xl">{{ t('index.partners.title') }}</h1>
    <div class="mt-10 flex flex-wrap items-center justify-center">
      <div class="flex justify-center">
        <NuxtImg width="96" :src="kh.logo" loading="lazy" />
      </div>
      <div class="mt-5 flex flex-col px-5 sm:mt-0">
        <UiLink class="text-center text-lg italic sm:text-xl md:text-left" :href="kh.hrefs.at(0)">
          Департамент соціального захисту Харківської ОВА
        </UiLink>
        <UiLink class="text-center text-lg italic sm:text-xl md:text-left" :href="kh.hrefs.at(1)">
          Департамент цивільного захисту Харківської ОВА
        </UiLink>
        <UiLink class="text-center text-lg italic sm:text-xl md:text-left" :href="kh.hrefs.at(2)">
          Адміністрація Слобідського району Харківської міської ради
        </UiLink>
        <UiLink class="text-center text-lg italic sm:text-xl md:text-left" :href="kh.hrefs.at(3)">
          Адміністрація Харківського вокзалу Південної залізниці
        </UiLink>
      </div>
    </div>
    <div class="mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-2 p-1">
      <a class="flex w-72 justify-center p-1" :href="partners.at(0)?.href" target="_blank">
        <NuxtImg class="w-full" :src="partners.at(0)?.logo" loading="lazy" />
      </a>
      <a class="flex w-72 justify-center" :href="partners.at(1)?.href" target="_blank">
        <NuxtImg class="w-full" :src="partners.at(1)?.logo" loading="lazy" />
      </a>
      <a
        class="flex w-72 justify-center rounded-sm bg-cyan-900 p-5"
        :href="partners.at(2)?.href"
        target="_blank"
      >
        <NuxtImg class="w-full" :src="partners.at(2)?.logo" loading="lazy" />
      </a>
      <a
        class="flex h-32 justify-center rounded-sm bg-red-500 p-1"
        :href="partners.at(3)?.href"
        target="_blank"
      >
        <NuxtImg class="w-full" :src="partners.at(3)?.logo" loading="lazy" />
      </a>
      <a
        class="flex h-32 w-36 justify-center rounded-sm bg-fuchsia-950 p-5"
        :href="partners.at(4)?.href"
        target="_blank"
      >
        <NuxtImg class="w-full" :src="partners.at(4)?.logo" loading="lazy" />
      </a>
      <a
        class="flex h-24 w-72 justify-center rounded-sm bg-white p-5"
        :href="partners.at(5)?.href"
        target="_blank"
      >
        <NuxtImg :src="partners.at(5)?.logo" loading="lazy" />
      </a>
      <a
        class="flex h-24 w-72 justify-center rounded-sm bg-white p-5"
        :href="partners.at(6)?.href"
        target="_blank"
      >
        <NuxtImg :src="partners.at(6)?.logo" loading="lazy" />
      </a>
      <a
        class="flex h-40 justify-center rounded-sm bg-white p-2"
        :href="partners.at(7)?.href"
        target="_blank"
      >
        <NuxtImg :src="partners.at(7)?.logo" loading="lazy" />
      </a>
      <a
        class="flex h-24 justify-center rounded-sm bg-blue-950 p-5"
        :href="partners.at(8)?.href"
        target="_blank"
      >
        <NuxtImg :src="partners.at(8)?.logo" loading="lazy" />
      </a>
    </div>
    <div
      class="mt-10 flex w-full flex-col items-center bg-stone-100 p-7 text-center text-2xl dark:bg-gray-800"
    >
      <div class="max-w-4xl">
        {{ t('index.partners.messages.work') }}
      </div>
      <div class="max-w-4xl">{{ t('index.partners.messages.thanks') }}</div>
    </div>
  </div>
</template>
