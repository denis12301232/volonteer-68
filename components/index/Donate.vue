<script setup lang="ts">
const { t } = useI18n();
const dialog = ref(false);
const name = ref<keyof typeof is>('paypal');
const is = {
   paypal: resolveComponent('IndexDonatePaypal'),
   liqpay: resolveComponent('IndexDonateLiqpay'),
};

function openModal(n: keyof typeof is) {
   name.value = n;
   dialog.value = !dialog.value;
}
</script>

<template>
   <div>
      <h1
         v-animateonscroll="{ enterClass: 'transition-opacity ease-in duration-700 opacity-100', leaveClass: '' }"
         class="my-14 text-center text-6xl"
         id="donate"
      >
         {{ t('main.donate.title') }}
      </h1>
      <div class="flex flex-wrap justify-center gap-4 bg-[url('/images/background-donate.webp')] bg-repeat py-8">
         <Card class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
            <template #title>
               <div class="text-center">
                  {{ t('main.donate.money.title') }}
               </div>
            </template>
            <template #content>
               <div class="mt-4 flex justify-center px-5">
                  <Button class="dark:border-blue-600 dark:text-blue-600" outlined @click="openModal('liqpay')">
                     <SvgLiqpay class="h-4 w-4" />
                     <span class="ml-2 font-bold">LiqPay</span>
                  </Button>
                  <Button class="ml-2 dark:border-blue-600 dark:text-blue-600" outlined @click="openModal('paypal')">
                     <Icon name="prime:paypal" />
                     <span class="ml-2 font-bold">PayPal</span>
                  </Button>
               </div>
               <div class="mt-5 px-5 italic">
                  {{ t('main.donate.money.messages.text') }}
               </div>
            </template>
         </Card>
         <Card class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
            <template #title>
               <div class="text-center">
                  {{ t('main.donate.goods.title') }}
               </div>
            </template>
            <template #subtitle>
               <div class="text-center">
                  {{ t('main.donate.goods.messages.title') }}
               </div>
            </template>
            <template #content>
               <ul class="!mt-5 !list-disc !px-5">
                  <li>{{ t('main.donate.goods.messages.food') }}</li>
                  <li>{{ t('main.donate.goods.messages.medicine') }}</li>
                  <li>{{ t('main.donate.goods.messages.bed') }}</li>
                  <li>{{ t('main.donate.goods.messages.mobility') }}</li>
                  <li>{{ t('main.donate.goods.messages.alternative') }}</li>
               </ul>
            </template>
         </Card>
         <Card class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
            <template #title>
               <div class="text-center">{{ t('main.donate.volunteer.title') }}</div>
            </template>
            <template #subtitle>
               <div class="text-center">{{ t('main.donate.volunteer.messages.title') }}</div>
            </template>
            <template #content>
               <ul class="!mt-5 !list-disc !px-5">
                  <li>{{ t('main.donate.volunteer.messages.transport') }}</li>
                  <li>{{ t('main.donate.volunteer.messages.accompany') }}</li>
                  <li>{{ t('main.donate.volunteer.messages.work') }}</li>
                  <li>{{ t('main.donate.volunteer.messages.help') }}</li>
               </ul>
               <div class="mt-5 px-5 italic">
                  {{ t('main.donate.volunteer.messages.text') }}
               </div>
            </template>
         </Card>
         <Dialog v-model:visible="dialog" :style="{ width: '320px' }" modal block-scroll close-on-escape>
            <template #container="{ closeCallback }">
               <Component :is="is[name]" @close="closeCallback" />
            </template>
         </Dialog>
      </div>
   </div>
</template>
