<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const route = useLocaleRoute();
</script>

<template>
   <div>
      <div class="hidden w-full justify-around py-5 md:flex">
         <Button
            class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
            color="sky"
            @click="router.push(route('/#donate')!)"
         >
            {{ t('main.buttons.donate') }}
         </Button>
         <Button
            class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
            color="sky"
            @click="router.push(route('/#contacts')!)"
         >
            {{ t('main.buttons.help') }}
         </Button>
      </div>
      <div
         v-animateonscroll="{ enterClass: 'transition-opacity ease-in duration-700 opacity-100', leaveClass: '' }"
         class="flex flex-col items-center"
         id="directions"
      >
         <h1 class="mt-16 text-center text-5xl">{{ t('main.directions.title') }}</h1>
         <p class="max-w-5xl pb-14 pt-7 text-center text-lg">
            {{ t('main.directions.subtitle') }}
         </p>
      </div>
      <div class="flex columns-2 flex-wrap justify-center gap-4">
         <Card v-for="(item, index) in 4" :key="item" class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
            <template #header>
               <NuxtImg
                  class="h-auto w-full select-none"
                  :src="`/images/direction-${item}.webp`"
                  alt="direction"
                  placeholder
                  loading="lazy"
               />
            </template>
            <template #content>
               <div class="max-w-xl px-5" v-html="t(`main.directions.content.${index}.text`)"></div>
            </template>
         </Card>
      </div>
      <div class="hidden w-full justify-around py-5 md:flex">
         <Button
            class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
            color="sky"
            @click="router.push(route('/#donate')!)"
         >
            {{ t('main.buttons.donate') }}
         </Button>
         <Button
            class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
            color="sky"
            @click="router.push(route('/#contacts')!)"
         >
            {{ t('main.buttons.help') }}
         </Button>
      </div>
   </div>
</template>
