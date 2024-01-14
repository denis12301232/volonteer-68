<script setup lang="ts">
const emit = defineEmits<{ close: [] }>();
const { locale, t } = useI18n();
const query = reactive({
  amount: 0,
  currency: 'USD',
  description: '',
  locale: computed(() => locale.value),
});
const { data, status, execute } = await useFetch('/api/paypal/donate', {
  query,
  immediate: false,
  server: false,
  watch: false,
});
const disabled = computed(() => status.value === 'pending' || !query.amount || !query.description);
const src = computed(() => data.value?.links.filter((link) => link.rel === 'approve').at(0)?.href);

watch(src, onSrc);

function onSrc(n?: string) {
  navigateTo(n, { external: true, open: { target: '_blank' } });
  emit('close');
}
</script>

<template>
  <Card>
    <template #header>
      <Button
        class="!absolute right-1 top-1 z-50 focus:ring-0"
        icon="pi pi-times"
        rounded
        text
        @click="emit('close')"
      >
        <Icon name="prime:times" />
      </Button>
    </template>
    <template #title>
      <h1 class="mt-4 text-center">{{ t('index.donate.money.messages.title') }}</h1>
    </template>
    <template #content>
      <form class="flex flex-col" @submit.prevent="execute()">
        <InputNumber
          v-model="query.amount"
          input-class="w-full"
          inputId="currency-us"
          mode="currency"
          currency="USD"
          locale="en-US"
        />
        <InputText
          v-model="query.description"
          class="mt-2"
          input-class="w-full"
          :placeholder="t('index.donate.money.messages.description')"
        />
        <div class="mt-7 flex justify-center">
          <Button
            class="pointer-events-auto w-fit p-2 disabled:cursor-not-allowed"
            type="submit"
            :disabled="disabled"
            :loading="status === 'pending'"
          >
            <Wheel v-if="status === 'pending'" />
            <Icon v-else name="prime:paypal" />
            <span class="ml-2 font-bold">{{ t('index.donate.money.messages.donate') }}</span>
          </Button>
        </div>
      </form>
    </template>
  </Card>
</template>
