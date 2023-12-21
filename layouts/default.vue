<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const localeRoute = useLocaleRoute();
const config = useRuntimeConfig();
const isLargeScreen = useMediaQuery('(min-width: 480px)');
const menu = reactive({ left: false, right: false });
const rightMenuRef = ref<HTMLDivElement | null>(null);
const { isSwiping, direction } = useSwipe(rightMenuRef);
const isNeedClose = computed(() => isSwiping.value && direction.value === 'right' && isLargeScreen.value);

watch(isNeedClose, () => isNeedClose.value && openMenu('right'));

function openMenu(type: 'left' | 'right') {
  menu[type] = !menu[type];
}

function goToAnchor(anchor: string) {
  router.push(localeRoute({ name: 'index', hash: anchor })!).then(() => setTimeout(() => scrollIntoView(anchor)));
}
</script>

<template>
  <header class="flex items-center justify-between p-2 sm:p-5">
    <div class="flex items-center">
      <NuxtImg class="block md:hidden lg:block" src="/images/logo.webp" sizes="64px sm:72px md:96px" alt="logo" />
      <ul class="ml-4 hidden md:block">
        <li class="flex items-center">
          <Icon name="prime:phone" />
          <span class="ml-1 font-bold">{{ t('main.contacts.messages.hotLine') }}:</span>
          <UiLink class="ml-1 text-sm italic" :href="`tel:${config.public.PHONE_HOT_LINE}`">
            {{ config.public.PHONE_HOT_LINE }}
          </UiLink>
        </li>
        <li class="flex items-center">
          <Icon name="fa6-solid:wheelchair-move" />
          <span class="ml-1 font-bold">{{ t('main.contacts.messages.invoTaxi') }}:</span>
          <UiLink class="ml-1 text-sm italic" :href="`tel:${config.public.PHONE_INVO_TAXI}`">
            {{ config.public.PHONE_INVO_TAXI }}
          </UiLink>
        </li>
        <li class="flex items-center">
          <Icon name="material-symbols:ambulance-sharp" />
          <span class="ml-1 font-bold">{{ t('main.contacts.messages.evacuation') }}:</span>
          <UiLink class="ml-1 text-sm italic" :href="`tel:${config.public.PHONE_EVACUATION}`">
            {{ config.public.PHONE_EVACUATION }}
          </UiLink>
        </li>
        <li>
          <Icon name="prime:file-edit" />
          <span class="ml-1 font-bold">{{ t('main.contacts.messages.online') + ' ' }}</span>
          <UiLink class="italic" :to="localeRoute({ name: 'google-form' })" border dashed>online</UiLink>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-end">
      <div class="flex items-center">
        <Button
          class="hidden dark:border-blue-600 dark:bg-blue-600 dark:text-white sm:inline-block md:hidden"
          @click="goToAnchor('#contacts')"
        >
          {{ t('main.buttons.help') }}
        </Button>
        <Button
          class="ml-2 hidden dark:border-blue-600 dark:bg-blue-600 dark:text-white sm:inline-block"
          @click="goToAnchor('#donate')"
        >
          {{ t('main.buttons.donate') }}
        </Button>
        <LangSwitcher class="ml-2 hidden !w-24 text-sm lg:flex" />
        <ThemeToggler class="ml-2 hidden lg:inline-flex" />
        <Button
          class="ml-2 inline-block !p-2 lg:hidden"
          text
          severity="secondary"
          aria-label="menu"
          @click="openMenu('right')"
        >
          <Icon name="prime:bars" size="40" />
        </Button>
      </div>
      <div class="mt-5 hidden lg:block">
        <UiLink class="ml-2 text-sm" :to="localeRoute({ name: 'index' })">
          {{ t('main.menu.main') }}
        </UiLink>
        <UiLink class="ml-2 text-sm" href="#about" @click="goToAnchor('#about')">
          {{ t('main.menu.about') }}
        </UiLink>
        <UiLink class="ml-2 text-sm" href="#directions" @click="goToAnchor('#directions')">
          {{ t('main.menu.directions') }}
        </UiLink>
        <UiLink class="ml-2 text-sm" href="#donate" @click="goToAnchor('#donate')">
          {{ t('main.menu.donate') }}
        </UiLink>
        <UiLink class="ml-2 text-sm" href="#partners" @click="goToAnchor('#partners')">
          {{ t('main.menu.partners') }}
        </UiLink>
        <UiLink class="ml-2 text-sm" :to="localeRoute({ name: 'news' })">
          {{ t('main.menu.news') }}
        </UiLink>
      </div>
    </div>
  </header>
  <main class="flex-auto">
    <slot />
  </main>
  <footer class="flex flex-col items-center py-7">
    <UiLink :href="`mailto:${config.public.EMAIL}`">{{ config.public.EMAIL }}</UiLink>
    <div class="mt-5">
      <a :href="`https://www.instagram.com/${config.public.INSTAGRAM}`" target="_blank" aria-label="instagram">
        <Icon class="hover:scale-105" name="prime:instagram" />
      </a>
      <a :href="`https://t.me/${config.public.TELEGRAM}`" target="_blank" aria-label="telegram">
        <Icon class="hover:scale-105" name="prime:telegram" />
      </a>
    </div>

    <div class="mt-5 flex items-center italic">
      <Icon name="ph:copyright-light" />
      <span class="ml-1">{{ new Date().getFullYear() }} Волонтер-68</span>
    </div>
  </footer>
  <Sidebar v-model:visible="menu.right" :position="isLargeScreen ? 'right' : 'full'">
    <template #container="{ closeCallback }">
      <div class="h-full w-full" ref="rightMenuRef">
        <div class="relative">
          <h1 class="pt-5 text-center text-xl uppercase">{{ t('main.menu.title') }}</h1>
          <Button v-if="!isLargeScreen" class="!absolute right-1 top-1" text rounded @click="closeCallback">
            <Icon name="prime:times" />
          </Button>
        </div>
        <Divider />
        <ScrollPanel
          class="w-full"
          style="height: calc(100% - 100px)"
          :pt-options="{ mergeProps: true, mergeSections: true }"
          :pt="{
            root: {
              class: ['group'],
            },
            barY: {
              class: [
                'bg-sky-500',
                'opacity-0',
                'group-hover:opacity-100',
                'transition-opacity',
                'ease-in',
                'duration-300',
                '!cursor-grab',
              ],
            },
            content: {
              class: ['flex', 'flex-col', 'items-center'],
            },
          }"
        >
          <LangSwitcher class="!w-24" />
          <UiLink class="mt-4" :to="localeRoute({ name: 'index' })" @click="openMenu('right')">
            {{ t('main.menu.main') }}
          </UiLink>
          <UiLink class="mt-4" href="#about" @click="[openMenu('right'), goToAnchor('#about')]">
            {{ t('main.menu.about') }}
          </UiLink>
          <UiLink class="mt-4" href="#directions" @click="[openMenu('right'), goToAnchor('#directions')]">
            {{ t('main.menu.directions') }}
          </UiLink>
          <UiLink class="mt-4" href="#donate" @click="[openMenu('right'), goToAnchor('#donate')]">
            {{ t('main.menu.donate') }}
          </UiLink>
          <UiLink class="mt-4" href="#partners" @click="[openMenu('right'), goToAnchor('#partners')]">
            {{ t('main.menu.partners') }}
          </UiLink>
          <UiLink class="mt-4" :to="localeRoute('/news')" @click="openMenu('right')">
            {{ t('main.menu.news') }}
          </UiLink>
          <ThemeToggler class="my-4" />
        </ScrollPanel>
      </div>
    </template>
  </Sidebar>
</template>
