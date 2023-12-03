<script setup lang="ts">
const props = defineProps<{
   modelValue: boolean;
   maximized?: boolean;
}>();
const emit = defineEmits<{
   'update:modelValue': [boolean];
}>();
const visible = computed({
   get() {
      return props.modelValue;
   },
   set(v: boolean) {
      emit('update:modelValue', v);
   },
});

function onClick() {
   visible.value = false;
}
</script>

<template>
   <Teleport to="body">
      <div
         v-if="visible"
         class="fixed bottom-0 left-0 right-0 top-0 z-50 flex justify-center bg-white"
         @click="onClick"
      >
         <div :class="{ 'w-full': maximized }" @click.stop>
            <slot />
         </div>
      </div>
   </Teleport>
</template>
