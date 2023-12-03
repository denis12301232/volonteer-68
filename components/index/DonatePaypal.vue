<script setup lang="ts">
import {
   loadScript,
   type CreateOrderData,
   type CreateOrderActions,
   type OnApproveData,
   type OnApproveActions,
} from '@paypal/paypal-js';

const { locale, t } = useI18n();
const config = useRuntimeConfig();
const paypalRef = ref<HTMLElement | null>(null);
const donate = ref(0);
const description = ref('');
const loading = ref(false);
const CURRENCY = 'USD';

onMounted(() => paypalRef.value && renderPaypal(paypalRef.value));

function renderPaypal(el: HTMLElement) {
   loading.value = true;
   loadScript({ clientId: config.public.PAYPAL_CLIENT_ID, currency: CURRENCY, locale: 'en_US' })
      .then(
         (paypal) =>
            paypal?.Buttons &&
            paypal
               .Buttons({ createOrder, onApprove, onError, style: { label: 'donate', color: 'silver' } })
               .render(el)
               .catch(console.error)
      )
      .catch(console.error)
      .finally(() => (loading.value = false));
}

async function createOrder(data: CreateOrderData, actions: CreateOrderActions) {
   return actions.order.create({
      purchase_units: [
         {
            amount: {
               currency_code: CURRENCY,
               value: donate.value.toString(),
               breakdown: { item_total: { currency_code: CURRENCY, value: donate.value.toString() } },
            },
            description: description.value,
            items: [
               {
                  category: 'DONATION',
                  name: description.value,
                  unit_amount: { value: donate.value.toString(), currency_code: CURRENCY },
                  quantity: '1',
               },
            ],
         },
      ],
      application_context: {
         locale: locale.value,
      },
      intent: 'CAPTURE',
   });
}

async function onApprove(data: OnApproveData, actions: OnApproveActions) {
   const order = await actions.order?.capture();
   donate.value = 0;
   description.value = '';
}

function onError(e: Record<string, unknown>) {
   console.error(e);
}
</script>

<template>
   <div class="flex w-full flex-col items-center">
      <div v-if="!loading" class="flex flex-col">
         <InputNumber v-model="donate" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
         <InputText v-model="description" class="mt-2" :placeholder="t('main.donate.money.messages.description')" />
      </div>
      <ProgressSpinner v-if="loading" />
      <div v-show="!loading && donate && description" class="mt-4 max-w-sm" ref="paypalRef"></div>
   </div>
</template>
