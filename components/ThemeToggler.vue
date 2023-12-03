<script setup>
import { ref } from 'vue';
const iconClass = ref('pi-moon');

const onThemeToggler = () => {
   const root = document.getElementsByTagName('html')[0];

   root.classList.toggle('dark');
   iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon';
};
</script>

<template>
   <div class="card mb-4 flex justify-end p-2">
      <button type="button" class="border-1 w-2rem h-2rem align-center flex justify-center p-0" @click="onThemeToggler">
         <i :class="`pi dark:text-white ${iconClass}`" />
         ffff
      </button>
   </div>
</template>
