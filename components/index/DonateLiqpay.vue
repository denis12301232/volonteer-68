<script setup lang="ts">
const emit = defineEmits<{ close: [] }>();
const { locale, t } = useI18n();
const params = reactive({ amount: 0, currency: 'USD', description: '', language: locale.value });
const { data, pending } = await useFetch('/api/liqpay/donate', { params, immediate: false, watch: [params] });
const disabled = computed(() => pending.value || !params.amount || !params.description);
</script>

<template>
   <Card>
      <template #header>
         <Button class="!absolute right-1 top-1 z-50" rounded text @click="emit('close')">
            <Icon name="prime:times" />
         </Button>
      </template>
      <template #title>
         <h1 class="mt-4 text-center">{{ t('main.donate.money.messages.title') }}</h1>
      </template>
      <template #content>
         <div class="flex flex-col">
            <InputNumber
               v-model="params.amount"
               input-class="w-full"
               inputId="currency-us"
               mode="currency"
               :currency="params.currency"
               locale="en-US"
            />
            <InputText
               v-model="params.description"
               class="mt-2"
               input-class="w-full"
               :placeholder="t('main.donate.money.messages.description')"
            />
         </div>
      </template>
      <template #footer>
         <form
            class="flex justify-center"
            method="POST"
            action="https://www.liqpay.ua/api/3/checkout"
            accept-charset="utf-8"
         >
            <input type="hidden" name="data" :value="data?.data" />
            <input type="hidden" name="signature" :value="data?.signature" />
            <Button :loading="pending" :disabled="disabled" type="submit">
               <SvgLiqpay class="h-6 w-6" />
               <span class="ml-2 font-bold">{{ t('main.donate.money.messages.donate') }}</span>
            </Button>
         </form>
      </template>
   </Card>
</template>
