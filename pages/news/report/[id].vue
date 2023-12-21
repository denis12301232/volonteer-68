<script setup lang="ts">
const { t, d } = useI18n();
const { goBack, router } = useNavigation();
const route = useRoute();
const { data: report, pending } = useFetch(`/api/report/${route.params.id}`, { watch: [() => route.params.id] });
const open = ref(false);
const index = ref(0);
const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 5,
  },
  {
    breakpoint: '1024px',
    numVisible: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
]);
useSeoMeta({ title: `${t('news.report.pageTitle')} | Волонтер 68, Харків`, description: t('news.report.pageTitle') });
onMounted(() => document.addEventListener('keydown', onKeyDown));
onUnmounted(() => document.removeEventListener('keydown', onKeyDown));
watchEffect(() => !report.value && !pending.value && router.push('/'));

function openWindow(i: number) {
  open.value = !open.value;
  index.value = i;
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    open.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col items-center px-2">
    <div class="w-full max-w-4xl">
      <Button outlined @click="goBack">
        <Icon name="prime:angle-left" />
        <span class="font-bold">{{ t('news.report.messages.back') }}</span>
      </Button>
    </div>
    <div v-if="pending" class="flex justify-center py-10">
      <ProgressSpinner />
    </div>
    <div v-else-if="report && !pending" class="w-full max-w-4xl py-2">
      <h1 class="mt-5 text-center text-3xl sm:text-5xl">{{ report.title }}</h1>
      <div class="mt-2 text-center italic">{{ d(report.createdAt) }}</div>
      <div class="flex flex-col items-center py-5">
        <NuxtImg
          v-for="(img, index) of report.images"
          class="cursor-pointer"
          :key="index"
          :src="img"
          alt="report"
          width="620"
          height="854"
          sizes="100vw"
          placeholder
          @click="openWindow(index)"
        />
        <a
          class="mt-2 flex w-full max-w-xl cursor-pointer items-center justify-between border p-5 transition-all hover:border-green-400"
          target="_blank"
          :href="report.file"
        >
          <Icon class="text-green-400" name="prime:download" />
          <span class="ml-2 text-sm font-medium italic">
            {{ t('news.report.messages.downloadPdf') }}
          </span>
          <Icon name="prime:file-pdf" />
        </a>
      </div>
      <Galleria
        v-model:visible="open"
        :value="report?.images"
        :responsive-options="responsiveOptions"
        :num-visible="9"
        :circular="true"
        :full-screen="true"
        :show-itemNavigators="true"
        :show-thumbnails="false"
        :active-index="index"
        :pt-options="{ mergeProps: false, mergeSections: true }"
        unstyled
        :pt="{
          root: {
            class: ['absolute', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-slate-950'],
          },
          content: {
            class: ['h-full', 'w-full'],
          },
          itemWrapper: {
            class: ['h-full', 'w-full'],
          },
          itemContainer: {
            class: ['h-full', 'w-full'],
          },
          closeButton: {
            class: [
              '!absolute',
              'top-0',
              'p-5',
              'right-0',
              'z-10',
              'hover:bg-sky-950/30',
              'rounded-full',
              'text-sky-600',
            ],
          },
          nextItemButton: {
            class: [
              '!absolute',
              '-right-7',
              'p-5',
              'hover:bg-sky-950/30',
              'rounded-full',
              'text-sky-600',
              'top-1/2',
              '-translate-x-1/2',
              'z-10',
              'block',
            ],
          },
          previousItemButton: {
            class: [
              '!absolute',
              'left-7',
              'p-5',
              'hover:bg-sky-950/30',
              'rounded-full',
              'text-sky-600',
              'top-1/2',
              '-translate-x-1/2',
              'z-10',
              'block',
            ],
          },
          item: {
            class: ['h-full', 'w-full', 'flex', 'justify-center', 'items-center'],
          },
        }"
      >
        <template #item="slotProps">
          <NuxtImg class="select-none" sizes="100%" :src="slotProps.item" placeholder alt="report" />
        </template>
      </Galleria>
    </div>
  </div>
</template>
