<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const route = useLocaleRoute();
const config = useRuntimeConfig();
const isLargeScreen = useMediaQuery('(min-width: 480px)');
const menu = reactive({ left: false, right: false });
const rightMenuRef = ref<HTMLDivElement | null>(null);
const { isSwiping, direction } = useSwipe(rightMenuRef);
const test = ref();

function openMenu(type: 'left' | 'right') {
   menu[type] = !menu[type];
}

watch(test, () => test.value, { immediate: true });

watch([isSwiping, direction, isLargeScreen], () => {
   if (isSwiping.value && direction.value === 'right' && isLargeScreen.value) {
      openMenu('right');
   }
});
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
               <UiLink class="italic" :to="route({ name: 'google-form' })" border dashed>online</UiLink>
            </li>
         </ul>
      </div>
      <div class="flex flex-col items-end">
         <div class="flex items-center">
            <Button
               class="hidden dark:border-blue-600 dark:bg-blue-600 dark:text-white sm:inline-block md:hidden"
               @click="router.push(route({ name: 'index', hash: '#contacts' })!)"
            >
               {{ t('main.buttons.help') }}
            </Button>
            <Button
               class="ml-2 hidden dark:border-blue-600 dark:bg-blue-600 dark:text-white sm:inline-block"
               @click="router.push(route({ name: 'index', hash: '#donate' })!)"
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
            <UiLink class="ml-2 text-sm" :to="route({ name: 'index' })">
               {{ t('main.menu.main') }}
            </UiLink>
            <UiLink class="ml-2 text-sm" :to="route({ name: 'index', hash: '#about' })">
               {{ t('main.menu.about') }}
            </UiLink>
            <UiLink class="ml-2 text-sm" :to="route('/#directions')">{{ t('main.menu.directions') }}</UiLink>
            <UiLink class="ml-2 text-sm" :to="route('/#donate')">{{ t('main.menu.donate') }}</UiLink>
            <UiLink class="ml-2 text-sm" :to="route('/#partners')">{{ t('main.menu.partners') }}</UiLink>
            <UiLink class="ml-2 text-sm" :to="route('/news')">
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
      <a
         class="mt-5"
         :href="`https://www.instagram.com/${config.public.INSTAGRAM}`"
         target="_blank"
         aria-label="instagram"
      >
         <Icon name="prime:instagram" />
      </a>
      <div class="mt-5 flex items-center italic">
         <Icon name="ph:copyright-light" />
         <span class="ml-1">{{ new Date().getFullYear() }} Волонтер-68</span>
      </div>
   </footer>
   <Sidebar v-model:visible="menu.right" :position="isLargeScreen ? 'right' : 'full'" block-scroll>
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
               <UiLink class="mt-4" :to="route({ name: 'index' })" @click="openMenu('right')">
                  {{ t('main.menu.main') }}
               </UiLink>
               <UiLink class="mt-4" :to="route('/#about')" @click="openMenu('right')">
                  {{ t('main.menu.about') }}
               </UiLink>
               <UiLink class="mt-4" :to="route('/#directions')" @click="openMenu('right')">
                  {{ t('main.menu.directions') }}
               </UiLink>
               <UiLink class="mt-4" :to="route('/#donate')" @click="openMenu('right')">
                  {{ t('main.menu.donate') }}
               </UiLink>
               <UiLink class="mt-4" :to="route('/#partners')" @click="openMenu('right')">
                  {{ t('main.menu.partners') }}
               </UiLink>
               <UiLink class="mt-4" :to="route('/news')" @click="openMenu('right')">
                  {{ t('main.menu.news') }}
               </UiLink>
               <ThemeToggler class="my-4" />
            </ScrollPanel>
         </div>
      </template>
   </Sidebar>
</template>
