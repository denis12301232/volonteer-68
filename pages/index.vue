<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const localeRoute = useLocaleRoute();
definePageMeta({ layout: 'default' });
useSeoMeta({ title: t('index.meta.title'), description: t('index.meta.description') });
onMounted(() => route.hash && setTimeout(() => scrollIntoView(route.hash, { behavior: 'smooth' })));
</script>

<template>
  <div class="mt-2 flex flex-col items-center sm:hidden">
    <Button
      class="w-fit p-2"
      @click="router.push(localeRoute({ name: 'index', hash: '#contacts' })!)"
    >
      {{ t('index.button.help') }}
    </Button>
    <Button
      class="mt-2 w-fit p-2"
      @click="router.push(localeRoute({ name: 'index', hash: '#donate' })!)"
    >
      {{ t('index.button.donate') }}
    </Button>
  </div>
  <div
    class="relative mt-4 flex flex-col items-center bg-slate-100 dark:bg-slate-800 sm:bg-transparent sm:dark:bg-transparent"
  >
    <div class="w-full max-w-7xl">
      <NuxtImg
        class="mt-2 select-none sm:mt-0"
        src="/images/team.webp"
        width="1280"
        height="626"
        alt="team"
        :placeholder="[1280, 626]"
      />
    </div>
    <div class="sm:-translate-2/4 sm:absolute sm:top-1/2 sm:text-white">
      <div class="flex items-start">
        <div class="relative -top-2 h-auto w-auto">
          <NuxtImg
            class="hidden select-none sm:inline-block"
            src="/images/logo-big.webp"
            width="96"
            height="96"
            alt="logo"
          />
        </div>
        <div class="flex flex-col items-center py-10 sm:py-0">
          <div class="text center text-4xl uppercase sm:ml-4 sm:text-7xl">
            {{ t('index.title') }}
          </div>
          <div class="mt-4 text-center text-xl font-medium sm:mt-0">
            {{ t('index.slogan') }}
          </div>
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
