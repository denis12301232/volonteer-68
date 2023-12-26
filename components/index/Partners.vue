<script setup lang="ts">
const { t } = useI18n();
const partners = [
  { logo: '/images/eef.svg', href: 'https://eef.org.ua' },
  { logo: '/images/unwomen.svg', href: 'https://www.unwomen.org' },
  { logo: '/images/wphfund.png', href: 'https://wphfund.org' },
  { logo: '/images/vostok-sos.svg', href: 'https://vostok-sos.org' },
  { logo: '/images/ednannia.png', href: 'https://ednannia.ua' },
  { logo: '/images/eda.png', href: 'https://www.eda.admin.ch/countries/ukraine/uk/home"' },
];
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
    <h1 class="mt-10 text-center text-4xl sm:text-6xl">{{ t('index.partners.title') }}</h1>
    <div class="mt-10 sm:mt-20 flex max-w-7xl flex-wrap items-center justify-center gap-2 p-1">
      <a class="flex w-72 justify-center p-1" :href="partners.at(0)?.href" target="_blank">
        <NuxtImg class="w-full" :src="partners.at(0)?.logo" />
      </a>
      <a class="flex w-72 justify-center" :href="partners.at(1)?.href" target="_blank">
        <NuxtImg class="w-full" :src="partners.at(1)?.logo" />
      </a>
      <a
        class="flex w-72 justify-center rounded-sm bg-black p-5"
        :href="partners.at(2)?.href"
        target="_blank"
      >
        <NuxtImg class="w-full" :src="partners.at(2)?.logo" />
      </a>
      <a
        class="flex h-32 justify-center rounded-sm bg-black p-1"
        :href="partners.at(3)?.href"
        target="_blank"
      >
        <NuxtImg class="w-full" :src="partners.at(3)?.logo" />
      </a>
      <a
        class="flex h-32 w-36 justify-center rounded-sm bg-fuchsia-900 p-5"
        :href="partners.at(4)?.href"
        target="_blank"
      >
        <NuxtImg class="w-full" :src="partners.at(4)?.logo" />
      </a>
      <a
        class="flex w-72 justify-center rounded-sm bg-slate-400 p-5"
        :href="partners.at(5)?.href"
        target="_blank"
      >
        <NuxtImg :src="partners.at(5)?.logo" />
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
