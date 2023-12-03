<script setup lang="ts">
interface Props extends /* @vue-ignore */ Partial<HTMLButtonElement> {
   color?: string;
}

withDefaults(defineProps<Props>(), { color: 'transparent' });
</script>

<template>
   <button
      :class="[
         'rounded-md',
         'border-none',
         'py-2',
         'px-2',
         'text-white',
         'disabled:cursor-not-allowed',
         'transition-all',
         {
            'hover:bg-slate-200': color === 'transparent',
            'bg-transparent': color === 'transparent',
            'hover:bg-slate-400': color === 'sky',
            'bg-blue-500': color === 'sky',
         },
      ]"
   >
      <slot />
   </button>
</template>
