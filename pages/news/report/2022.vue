<script setup lang="ts">
const { goBack } = useNavigation();
const open = ref(false);
const index = ref(0);
const images = ref(['/images/report-2022-1.webp', '/images/report-2022-2.webp']);
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

function openWindow(i: number) {
   open.value = !open.value;
   index.value = i;
}

onMounted(() => document.addEventListener('keydown', onKeyDown));
onUnmounted(() => document.removeEventListener('keydown', onKeyDown));

function onKeyDown(e: KeyboardEvent) {
   if (e.key === 'Escape') {
      open.value = false;
   }
}
</script>

<template>
   <div class="flex justify-center">
      <div class="w-full max-w-xl">
         <UiLink class="flex" @click="goBack">
            <img class="h-6 w-6" src="~/assets/icons/arrow-back.svg" alt="arrow-right" />
            <span>Go back</span>
         </UiLink>
         <h1 class="mt-5 text-5xl">Звіт за 2022 рік</h1>
         <div>17 квіт. 2023 р.</div>
         <div class="flex flex-col items-center">
            <NuxtImg
               v-for="(img, index) of images"
               class="w-full max-w-md cursor-pointer"
               :key="index"
               :src="img"
               @click="openWindow(index)"
            />
         </div>
         <a
            class="block cursor-pointer border p-5 transition-shadow hover:border-black"
            href="/report-2022.pdf"
            target="_blank"
         >
            Download pdf
         </a>
      </div>
      <Galleria
         v-model:visible="open"
         :value="images"
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
            <img :src="slotProps.item" :alt="slotProps.item.alt" style=" max-height: 70%" />
         </template>
      </Galleria>
   </div>
</template>
