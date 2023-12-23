<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div
    v-animateonscroll="{
      enterClass: 'transition-opacity duration-500 ease-in opacity-100',
      threshold: [0.1],
    }"
    class="mt-7"
  >
    <div class="hidden w-full justify-around py-5 md:flex">
      <Button
        class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
        color="sky"
        @click="scrollIntoView('#donate', { behavior: 'smooth' })"
      >
        {{ t('index.button.donate') }}
      </Button>
      <Button
        class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
        color="sky"
        @click="scrollIntoView('#contacts', { behavior: 'smooth' })"
      >
        {{ t('index.button.help') }}
      </Button>
    </div>
    <div class="flex flex-col items-center" id="directions">
      <h1 class="text-center text-4xl sm:text-6xl">{{ t('index.directions.title') }}</h1>
      <p class="max-w-5xl pb-14 pt-7 text-center text-lg">
        {{ t('index.directions.subtitle') }}
      </p>
    </div>
    <div class="flex columns-2 flex-wrap justify-center gap-4">
      <Card
        v-for="(item, index) in 4"
        :key="item"
        class="w-96 basis-full sm:basis-2/5"
        style="min-width: 300px"
      >
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
          <div class="px-5" v-html="t(`index.directions.content.${index}.text`)"></div>
        </template>
      </Card>
    </div>
    <div class="hidden w-full justify-around py-5 md:flex">
      <Button
        class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
        color="sky"
        @click="scrollIntoView('#donate', { behavior: 'smooth' })"
      >
        {{ t('index.button.donate') }}
      </Button>
      <Button
        class="text-lg dark:border-blue-600 dark:bg-blue-600 dark:text-white"
        color="sky"
        @click="scrollIntoView('#contacts', { behavior: 'smooth' })"
      >
        {{ t('index.button.help') }}
      </Button>
    </div>
  </div>
</template>
