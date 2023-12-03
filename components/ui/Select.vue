<script setup lang="ts">
interface Props {
   options: { value: string; text: string }[];
   modelValue: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{ 'update:modelValue': [string] }>();

const selected = computed({
   get() {
      return props.modelValue;
   },
   set(v) {
      emit('update:modelValue', v);
   },
});

function onChange(e: Event) {
   const target = e.target as HTMLSelectElement;
   selected.value = target.value;
}
</script>

<template>
   <select
      class="rounded-sm border border-slate-400 px-3 py-2 text-lg shadow-sm outline-none focus:bg-slate-200"
      title="lang"
      @change="onChange"
   >
      <option
         v-for="(option, index) of options"
         :key="index"
         :value="option.value"
         :selected="option.value === selected"
      >
         {{ option.text }}
      </option>
   </select>
</template>
