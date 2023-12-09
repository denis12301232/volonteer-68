<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const route = useLocaleRoute();
const config = useRuntimeConfig();
const menu = reactive({ left: false, right: false });

function openMenu(type: 'left' | 'right') {
   if (type === 'left') {
      menu.left = !menu.left;
   } else {
      menu.right = !menu.right;
   }
}
</script>

<template>
   <header class="flex items-center justify-between px-1 py-5 sm:p-5">
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
               <Icon name="icon-park-solid:wheelchair" />
               <span class="ml-1 font-bold">{{ t('main.contacts.messages.invoTaxi') }}:</span>
               <UiLink class="ml-1 text-sm italic" :href="`tel:${config.public.PHONE_INVO_TAXI}`">
                  {{ config.public.PHONE_INVO_TAXI }}
               </UiLink>
            </li>
            <li class="flex items-center">
               <Icon name="streamline:ambulance-solid" />
               <span class="ml-1 font-bold">{{ t('main.contacts.messages.evacuation') }}:</span>
               <UiLink class="ml-1 text-sm italic" :href="`tel:${config.public.PHONE_EVACUATION}`">
                  {{ config.public.PHONE_EVACUATION }}
               </UiLink>
            </li>
            <li>
               <Icon name="prime:file-edit" />
               <span class="ml-1 font-bold">{{ t('main.contacts.messages.online') + ' ' }}</span>
               <UiLink
                  class="italic"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXVrOShlFBkR6i8OFxPDQiOU3SUmBxjKxGV2l1WqQfrffTwQ/viewform"
                  target="_blank"
                  border
                  dashed
                  >online
               </UiLink>
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
               class="ml-2 dark:border-blue-600 dark:bg-blue-600 dark:text-white"
               @click="router.push(route({ name: 'index', hash: '#donate' })!)"
            >
               {{ t('main.buttons.donate') }}
            </Button>
            <LangSwitcher class="ml-2 hidden !w-24 text-sm lg:flex" />
            <ThemeToggler class="ml-2 hidden lg:inline-flex" />
            <Button class="ml-2 inline-block !p-2 lg:hidden" text severity="secondary" @click="openMenu('right')">
               <Icon name="prime:bars" />
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
      <a class="mt-5" :href="`https://www.instagram.com/${config.public.INSTAGRAM}`" target="_blank">
         <Icon name="prime:instagram" />
      </a>
      <div class="mt-5 flex items-center italic">
         <Icon name="ph:copyright-light" />
         <span class="ml-1">{{ new Date().getFullYear() }} Волонтер-68</span>
      </div>
   </footer>
   <Sidebar v-model:visible="menu.left" header="Sidebar">ff</Sidebar>
   <Sidebar v-model:visible="menu.right" position="right">
      <template #container>
         <h1 class="pt-5 text-center text-xl uppercase">{{ t('main.menu.title') }}</h1>
         <Divider />
         <div class="flex flex-col items-center">
            <LangSwitcher class="!w-24" />
            <UiLink class="mt-4" :to="route({ name: 'index' })">
               {{ t('main.menu.main') }}
            </UiLink>
            <UiLink class="mt-4" :to="route('/#about')">{{ t('main.menu.about') }}</UiLink>
            <UiLink class="mt-4" :to="route('/#directions')">{{ t('main.menu.directions') }}</UiLink>
            <UiLink class="mt-4" :to="route('/#donate')">{{ t('main.menu.donate') }}</UiLink>
            <UiLink class="mt-4" :to="route('/#partners')">{{ t('main.menu.partners') }}</UiLink>
            <UiLink class="mt-4" :to="route('/news')">
               {{ t('main.menu.news') }}
            </UiLink>
            <ThemeToggler class="mt-4" />
         </div>
      </template>
   </Sidebar>
</template>
