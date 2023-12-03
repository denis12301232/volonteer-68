<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface Props extends /* @vue-ignore */ Omit<Partial<HTMLAnchorElement>, 'class'> {
   dashed?: boolean;
   border?: boolean;
   to?: RouteLocationRaw;
}
const props = withDefaults(defineProps<Props>(), { dashed: false, border: false });
const router = useRouter();

function onClick(e: Event) {
   if (!props.to) {
      return;
   }
   e.preventDefault();
   router.push(props.to);
}
</script>

<template>
   <a
      :class="[
         'hover:text-sky-400',
         'cursor-pointer',
         { 'border-b-2': border, 'border-dashed': dashed, 'hover:border-sky-400': dashed, 'border-gray-500': dashed },
      ]"
      :="$attrs"
      @click="onClick"
   >
      <slot />
   </a>
</template>
