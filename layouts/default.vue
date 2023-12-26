<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const localeRoute = useLocaleRoute();
const config = useRuntimeConfig();
const isLargeScreen = useMediaQuery('(min-width: 480px)');
const menu = reactive({ left: false, right: false });
const rightMenuRef = ref<HTMLDivElement | null>(null);
const { isSwiping, direction } = useSwipe(rightMenuRef);
const isNeedClose = computed(
  () => isSwiping.value && direction.value === 'right' && isLargeScreen.value
);
const items = computed(() => [
  {
    label: t('layout.default.nav.help'),
    icon: 'prime:envelope',
    items: [
      {
        label: `${t('layout.default.menu.contacts.hotLine')}`,
        icon: 'prime:phone',
        url: `tel:${config.public.PHONE_HOT_LINE}`,
        phone: config.public.PHONE_HOT_LINE,
      },
      {
        label: `${t('layout.default.menu.contacts.invoTaxi')}`,
        icon: 'fa6-solid:wheelchair-move',
        url: `tel:${config.public.PHONE_INVO_TAXI}`,
        phone: config.public.PHONE_INVO_TAXI,
      },
      {
        label: `${t('layout.default.menu.contacts.evacuation')}`,
        icon: 'material-symbols:ambulance-sharp',
        url: `tel:${config.public.PHONE_EVACUATION}`,
        phone: config.public.PHONE_EVACUATION,
      },
      {
        label: `${t('layout.default.menu.contacts.online')}`,
        icon: 'prime:file-edit',
        route: localeRoute({ name: 'google-form' }),
        phone: 'online',
      },
    ],
  },
  {
    label: t('layout.default.nav.projects'),
    icon: 'prime:search',
    items: [
      {
        label: t('layout.default.menu.projects.0'),
        route: localeRoute({ name: 'project-id', params: { id: 1 } }),
      },
      {
        label: t('layout.default.menu.projects.1'),
        route: localeRoute({ name: 'project-id', params: { id: 2 } }),
      },
      {
        label: t('layout.default.menu.projects.2'),
        route: localeRoute({ name: 'project-id', params: { id: 3 } }),
      },
      {
        label: t('layout.default.menu.projects.3'),
        route: localeRoute({ name: 'project-id', params: { id: 4 } }),
      },
      {
        label: t('layout.default.menu.projects.4'),
        route: localeRoute({ name: 'project-id', params: { id: 5 } }),
      },
      {
        label: t('layout.default.menu.projects.5'),
        route: localeRoute({ name: 'project-id', params: { id: 6 } }),
      },
      {
        label: t('layout.default.menu.projects.6'),
        route: localeRoute({ name: 'project-id', params: { id: 7 } }),
      },
      {
        label: t('layout.default.menu.projects.7'),
        route: localeRoute({ name: 'project-id', params: { id: 8 } }),
      },
      {
        label: t('layout.default.menu.projects.8'),
        route: localeRoute({ name: 'project-id', params: { id: 9 } }),
      },
      {
        label: t('layout.default.menu.projects.9'),
        route: localeRoute({ name: 'project-id', params: { id: 10 } }),
      },
      {
        label: t('layout.default.menu.projects.10'),
        route: localeRoute({ name: 'project-id', params: { id: 11 } }),
      },
      {
        label: t('layout.default.menu.projects.11'),
        route: localeRoute({ name: 'project-id', params: { id: 12 } }),
      },
    ],
  },
]);

watch(isNeedClose, () => isNeedClose.value && openMenu('right'));

function openMenu(type: 'left' | 'right') {
  menu[type] = !menu[type];
}
</script>

<template>
  <header class="w-full">
    <Menubar
      :model="items"
      :pt-options="{ mergeProps: true, mergeSections: true }"
      :pt="{
        end: {
          class: ['ml-auto'],
        },
        submenu: {
          class: ['sm:w-auto', 'max-h-96', 'overflow-y-auto', 'gutter-both'],
        },
      }"
    >
      <template #menubutton>
        <span></span>
      </template>
      <template #start>
        <Svg
          class="mx-3 h-16 w-16 dark:fill-white sm:h-20 sm:w-20 md:h-24 md:w-24"
          name="logo"
        ></Svg>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink
          v-ripple
          class="hidden items-center md:flex"
          :to="item.route"
          :="props.action"
          :href="item.url"
        >
          <div>
            <Icon v-if="item.icon" :name="item.icon" />
          </div>
          <div class="ml-2 flex flex-col items-center justify-center">
            <span class="text-center">{{ item.label }}</span>
            <span v-if="item.phone" class="text-sm italic">{{ item.phone }}</span>
          </div>
          <div>
            <Icon v-if="hasSubmenu" name="prime:angle-down" />
          </div>
        </NuxtLink>
      </template>
      <template #end>
        <div class="flex flex-col items-end">
          <div class="flex items-center">
            <Button
              class="hidden dark:border-blue-600 dark:bg-blue-600 dark:text-white sm:inline-block md:hidden"
              @click="router.push(localeRoute({ name: 'index', hash: '#contacts' })!)"
            >
              {{ t('layout.default.nav.help') }}
            </Button>
            <Button
              class="ml-2 hidden dark:border-blue-600 dark:bg-blue-600 dark:text-white sm:inline-block"
              @click="router.push(localeRoute({ name: 'index', hash: '#donate' })!)"
            >
              {{ t('layout.default.nav.donateTop') }}
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
          <div class="mr-4 mt-5 hidden items-center justify-center py-4 lg:flex">
            <UiLink class="text-center text-sm" :to="localeRoute({ name: 'index' })">
              {{ t('layout.default.nav.index') }}
            </UiLink>
            <UiLink
              class="ml-2 text-center text-sm"
              :to="localeRoute({ name: 'index', hash: '#about' })"
            >
              {{ t('layout.default.nav.about') }}
            </UiLink>
            <UiLink
              class="ml-2 text-center text-sm"
              :to="localeRoute({ name: 'index', hash: '#directions' })"
            >
              {{ t('layout.default.nav.directions') }}
            </UiLink>
            <UiLink
              class="ml-2 text-center text-sm"
              :to="localeRoute({ name: 'index', hash: '#donate' })"
            >
              {{ t('layout.default.nav.donate') }}
            </UiLink>
            <UiLink
              class="ml-2 text-center text-sm"
              :to="localeRoute({ name: 'index', hash: '#partners' })"
            >
              {{ t('layout.default.nav.partners') }}
            </UiLink>
            <UiLink class="ml-2 text-center text-sm" :to="localeRoute({ name: 'news' })">
              {{ t('layout.default.nav.news') }}
            </UiLink>
          </div>
        </div>
      </template>
    </Menubar>
  </header>
  <main class="flex-auto">
    <slot />
  </main>
  <footer
    :class="[
      'rounded-md',
      'border',
      'border-gray-300',
      'bg-gray-100',
      'py-4',
      'flex',
      'flex-col',
      'items-center',
      'dark:border-blue-900/40',
      'dark:bg-gray-900',
    ]"
  >
    <div class="flex items-center">
      <a :href="`mailto:${config.public.EMAIL}`" target="_blank" aria-label="email">
        <Icon class="hover:scale-105" name="prime:envelope" />
      </a>
      <a :href="`https://t.me/${config.public.TELEGRAM}`" target="_blank" aria-label="telegram">
        <Icon class="hover:scale-105" name="prime:telegram" />
      </a>
      <a :href="config.public.FACEBOOK" target="_blank" aria-label="facebook">
        <Icon class="hover:scale-105" name="prime:facebook" />
      </a>
      <a
        :href="`https://www.instagram.com/${config.public.INSTAGRAM}`"
        target="_blank"
        aria-label="instagram"
      >
        <Icon class="hover:scale-105" name="prime:instagram" />
      </a>
    </div>
    <div class="mt-5 flex items-center italic">
      <Icon name="ph:copyright-light" />
      <span class="ml-1">{{ new Date().getFullYear() }} Волонтер-68</span>
    </div>
  </footer>
  <Sidebar
    v-model:visible="menu.right"
    :position="isLargeScreen ? 'right' : 'full'"
    :block-scroll="!isLargeScreen"
    :pt="{
      mask: {
        class: ['bg-trasnparent'],
      },
    }"
  >
    <template #container="{ closeCallback }">
      <div class="h-full w-full" ref="rightMenuRef">
        <div class="relative">
          <h1 class="pt-5 text-center text-xl uppercase">
            {{ t('layout.default.menu.rightSidebar.title') }}
          </h1>
          <Button
            v-if="!isLargeScreen"
            class="!absolute right-1 top-1"
            text
            rounded
            @click="closeCallback"
          >
            <Icon name="prime:times" />
          </Button>
        </div>
        <Divider />
        <div
          class="gutter-both flex flex-col items-center overflow-auto"
          style="height: calc(100% - 100px)"
        >
          <LangSwitcher class="!w-24" />
          <UiLink class="mt-4" :to="localeRoute({ name: 'index' })" @click="openMenu('right')">
            {{ t('layout.default.nav.index') }}
          </UiLink>
          <UiLink
            class="mt-4"
            :to="localeRoute({ name: 'index', hash: '#contacts' })"
            @click="openMenu('right')"
          >
            {{ t('layout.default.nav.contacts') }}
          </UiLink>
          <UiLink class="mt-4" :to="localeRoute({ name: 'project' })" @click="openMenu('right')">
            {{ t('layout.default.nav.projects') }}
          </UiLink>
          <UiLink
            class="mt-4"
            :to="localeRoute({ name: 'index', hash: '#about' })"
            @click="openMenu('right')"
          >
            {{ t('layout.default.nav.about') }}
          </UiLink>
          <UiLink
            class="mt-4"
            :to="localeRoute({ name: 'index', hash: '#directions' })"
            @click="openMenu('right')"
          >
            {{ t('layout.default.nav.directions') }}
          </UiLink>
          <UiLink
            class="mt-4"
            :to="localeRoute({ name: 'index', hash: '#donate' })"
            @click="openMenu('right')"
          >
            {{ t('layout.default.nav.donate') }}
          </UiLink>
          <UiLink
            class="mt-4"
            :to="localeRoute({ name: 'index', hash: '#partners' })"
            @click="openMenu('right')"
          >
            {{ t('layout.default.nav.partners') }}
          </UiLink>
          <UiLink class="mt-4" :to="localeRoute({ name: 'news' })" @click="openMenu('right')">
            {{ t('layout.default.nav.news') }}
          </UiLink>
          <ThemeToggler class="my-4" />
          <div class="flex items-center">
            <a :href="`mailto:${config.public.EMAIL}`" target="_blank" aria-label="email">
              <Icon class="hover:scale-105" name="prime:envelope" />
            </a>
            <a
              :href="`https://t.me/${config.public.TELEGRAM}`"
              target="_blank"
              aria-label="telegram"
            >
              <Icon class="hover:scale-105" name="prime:telegram" />
            </a>
            <a :href="config.public.FACEBOOK" target="_blank" aria-label="facebook">
              <Icon class="hover:scale-105" name="prime:facebook" />
            </a>
            <a
              :href="`https://www.instagram.com/${config.public.INSTAGRAM}`"
              target="_blank"
              aria-label="instagram"
            >
              <Icon class="hover:scale-105" name="prime:instagram" />
            </a>
          </div>
        </div>
      </div>
    </template>
  </Sidebar>
</template>
