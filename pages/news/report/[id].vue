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
useSeoMeta({ title: `${t('news.report.pageTitle')} | Волонтер 68, Харків` });
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
   <div class="flex justify-center">
      <div class="w-full max-w-xl">
         <UiLink class="flex items-center" @click="goBack">
            <i class="pi pi-angle-left"></i>
            <span>{{ t('news.report.messages.back') }}</span>
         </UiLink>
         <div v-if="pending" class="flex justify-center py-10">
            <ProgressSpinner />
         </div>
         <div v-else-if="report && !pending">
            <h1 class="mt-5 text-5xl">{{ report.title }}</h1>
            <div>{{ d(report.createdAt) }}</div>
            <div class="flex flex-col items-center py-5">
               <NuxtImg
                  v-for="(img, index) of report.images"
                  class="w-full max-w-md cursor-pointer"
                  :key="index"
                  :src="img"
                  @click="openWindow(index)"
               />
            </div>
            <a
               class="flex cursor-pointer items-center justify-between border p-5 transition-all hover:border-green-400"
               target="_blank"
               :href="report.file"
            >
               <i class="pi pi-download text-green-400"></i>
               <span class="ml-2 text-sm font-medium italic">
                  {{ t('news.report.messages.downloadPdf') }}
               </span>
               <i class="pi pi-file-pdf"></i>
            </a>
         </div>
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
         :pt-options="{ mergeProps: true, mergeSections: true }"
         :pt="{
            root: {
               class: ['absolute', 'top-0', 'left-0', 'right-0', 'bottom-0', 'flex', 'justify-center', 'items-center'],
            },
            closeButton: {
               class: ['!absolute', 'top-0', 'right-0'],
            },
         }"
      >
         <template #item="slotProps">
            <img style="width: 70%" :src="slotProps.item" :alt="slotProps.item" />
         </template>
      </Galleria>
   </div>
</template>
