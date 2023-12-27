<script setup lang="ts">
const emit = defineEmits<{ close: [] }>();
const { locale, t } = useI18n();
const button = ref<HTMLButtonElement | null>(null);
const query = reactive({ amount: 0, currency: 'USD', description: '', language: locale.value });
const { data, status, execute } = useAsyncData(
  'donate-liqpay',
  () => $fetch('/api/liqpay/donate', { query }),
  {
    immediate: false,
    server: false,
  }
);
const disabled = computed(() => status.value === 'pending' || !query.amount || !query.description);
const API = 'https://www.liqpay.ua/api/3/checkout';

function donate() {
  execute()
    .then(() => button.value?.click())
    .finally(() => emit('close'));
}
</script>

<template>
  <Card>
    <template #header>
      <Button class="!absolute right-1 top-1 z-50" rounded text @click="emit('close')">
        <Icon name="prime:times" />
      </Button>
    </template>
    <template #title>
      <h1 class="mt-4 text-center">{{ t('index.donate.money.messages.title') }}</h1>
    </template>
    <template #content>
      <form class="flex flex-col" @submit.prevent="donate">
        <InputNumber
          v-model="query.amount"
          input-class="w-full"
          inputId="currency-us"
          mode="currency"
          :currency="query.currency"
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
            class="pointer-events-auto disabled:cursor-not-allowed dark:border-blue-600 dark:bg-blue-600 dark:text-white"
            :loading="status === 'pending'"
            :disabled="disabled"
            type="submit"
          >
            <ProgressSpinner v-if="status === 'pending'" class="h-5 w-5" strokeWidth="8" />
            <Svg v-else class="h-4 w-4" name="liqpay"></Svg>
            <span class="ml-2 font-bold">{{ t('index.donate.money.messages.donate') }}</span>
          </Button>
        </div>
      </form>
      <form v-show="false" method="POST" :action="API" accept-charset="utf-8" target="_blank">
        <input type="hidden" name="data" :value="data?.data" />
        <input type="hidden" name="signature" :value="data?.signature" />
        <button type="submit" ref="button"></button>
      </form>
    </template>
  </Card>
</template>
