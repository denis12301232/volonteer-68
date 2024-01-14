<script setup lang="ts">
import type { IPartner } from '@/types';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const { t } = useI18n();
const isLargeScreen = inject<Ref<boolean>>('isLargeScreen');
const partners = ref<IPartner[]>([
  {
    logo: '/images/aisrael.png',
    href: 'https://www.aisrael.org/eng',
    width: 'auto',
    height: 140,
    background: 'white',
  },
  {
    logo: '/images/eda.png',
    href: 'https://www.eda.admin.ch/countries/ukraine/uk/home',
    width: 'auto',
    height: 90,
    background: 'white',
  },
  {
    logo: '/images/eef.svg',
    href: 'https://eef.org.ua',
    width: 288,
    height: 'auto',
    background: 'white',
  },
  {
    logo: '/images/novaukraine.svg',
    href: 'https://novaukraine.org',
    width: 288,
    height: 'auto',
    background: '#172554',
  },
  {
    logo: '/images/purple-vest.svg',
    href: 'https://purple-vest.net',
    width: 288,
    height: 'auto',
    background: 'white',
  },
  {
    logo: '/images/unwomen.svg',
    href: 'https://www.unwomen.org',
    width: 288,
    height: 'auto',
    background: 'transparent',
  },
  {
    logo: '/images/wphfund.png',
    href: 'https://wphfund.org',
    width: 'auto',
    height: 60,
    background: '#164e63',
  },

  {
    logo: '/images/ednannia.png',
    href: 'https://ednannia.ua',
    width: 140,
    height: 100,
    background: '#4a044e',
  },
  {
    logo: '/images/vostok-sos.svg',
    href: 'https://vostok-sos.org',
    width: 120,
    height: 120,
    background: '#ef4444',
  },
]);
const isInited = ref(false);
const kh = {
  logo: '/images/kharkiv.png',
  hrefs: [
    'https://kharkivoda.gov.ua/oblasna-derzhavna-administratsiya/struktura-administratsiyi/strukturni-pidrozdili/139',
    'https://kharkivoda.gov.ua/oblasna-derzhavna-administratsiya/struktura-administratsiyi/strukturni-pidrozdili/143',
    'https://www.city.kharkov.ua/uk/gorodskaya-vlast/ispolnitelnyie-organyi/rajonnyie-administraczii/kominternovskij-rajon/administracziya',
    'https://www.pz.gov.ua',
  ],
};
let swiper: Swiper;

onMounted(() => {
  swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 100,
    modules: [Pagination],
    loop: true,
    pagination: {
      el: '.swiper-pagination-custom',
      clickable: true,
      bulletClass: 'mr-1 h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600',
      bulletActiveClass: '!bg-blue-700 dark:!bg-blue-700',
      clickableClass: 'cursor-pointer',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
    on: {
      init: () => (isInited.value = true),
    },
  });
});
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
    <h1 class="mt-5 text-center text-4xl sm:mt-10 sm:text-6xl">
      {{ t('index.partners.title') }}
    </h1>
    <div class="mt-10 flex flex-wrap items-center justify-center">
      <div class="flex justify-center">
        <NuxtImg width="96" :src="kh.logo" loading="lazy" />
      </div>
      <div class="mt-5 flex flex-col px-5 sm:mt-0">
        <UiLink class="text-center text-lg italic md:text-left" :href="kh.hrefs.at(0)">
          Департамент соціального захисту Харківської ОВА
        </UiLink>
        <UiLink class="text-center text-lg italic md:text-left" :href="kh.hrefs.at(1)">
          Департамент цивільного захисту Харківської ОВА
        </UiLink>
        <UiLink class="text-center text-lg italic md:text-left" :href="kh.hrefs.at(2)">
          Адміністрація Слобідського району Харківської міської ради
        </UiLink>
        <UiLink class="text-center text-lg italic md:text-left" :href="kh.hrefs.at(3)">
          Адміністрація Харківського вокзалу Південної залізниці
        </UiLink>
      </div>
    </div>
    <div class="swiper h-64 w-full !px-10">
      <div class="swiper-wrapper">
        <div
          v-for="partner of partners"
          :key="partner.href"
          class="swiper-slide !flex items-center justify-center"
        >
          <a
            class="rounded-sm p-5"
            :href="partner.href"
            target="_blank"
            :style="{ backgroundColor: partner.background }"
          >
            <NuxtImg
              :src="partner.logo"
              :width="partner.width"
              :height="partner.height"
              loading="lazy"
              placeholder
            />
          </a>
          <div class="swiper-lazy-preloader"></div>
        </div>
      </div>
    </div>
    <div v-show="isInited" class="flex items-center">
      <Button v-show="isLargeScreen" class="focus:ring-0" text rounded @click="swiper.slidePrev()">
        <Icon name="prime:angle-left" size="50" />
      </Button>
      <div class="swiper-pagination-custom flex justify-center px-2"></div>
      <Button v-show="isLargeScreen" class="focus:ring-0" text rounded @click="swiper.slideNext()">
        <Icon name="prime:angle-right" size="50" />
      </Button>
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
