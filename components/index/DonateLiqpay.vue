<script setup lang="ts">
const { locale, t } = useI18n();
const params = reactive({ amount: 0, currency: 'USD', description: '', language: locale.value });
const { data, pending } = await useFetch('/api/liqpay/donate', { params, immediate: false, watch: [params] });
const disabled = computed(() => pending || !params.amount || !params.description);
</script>

<template>
   <div class="flex w-full flex-col items-center">
      <div class="flex flex-col">
         <InputNumber
            v-model="params.amount"
            inputId="currency-us"
            mode="currency"
            :currency="params.currency"
            locale="en-US"
         />
         <InputText v-model="params.description" class="mt-2" :placeholder="t('main.donate.money.messages.description')" />
      </div>
      <form class="mt-2" method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
         <input type="hidden" name="data" :value="data?.data" />
         <input type="hidden" name="signature" :value="data?.signature" />
         <Button :loading="pending" :disabled="disabled.value" type="submit">
            <img class="w-5" src="~/assets/icons/liqpay.svg" alt="" />
            <span class="ml-2">{{ t('main.donate.money.messages.donate') }}</span>
         </Button>
      </form>
   </div>
</template>
