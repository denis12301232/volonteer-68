<script setup lang="ts">
const { t } = useI18n();
const modals = reactive({ donate: false });
const name = ref<keyof typeof is>('paypal');
const is = {
  paypal: resolveComponent('IndexDonatePaypal'),
  liqpay: resolveComponent('IndexDonateLiqpay'),
};

function openModal(n: keyof typeof is) {
  name.value = n;
  modals.donate = !modals.donate;
}
</script>

<template>
  <div
    v-animateonscroll="{
      enterClass: 'transition-opacity duration-500 ease-in opacity-100',
      threshold: [0.1],
    }"
  >
    <h1 class="mt-14 text-center text-4xl sm:text-6xl" id="donate">
      {{ t('index.donate.title') }}
    </h1>
    <div class="relative mt-7">
      <NuxtImg
        class="absolute -z-10 h-full w-full select-none object-center"
        src="/images/background-donate.webp"
        alt="background"
        loading="lazy"
      />
      <div class="flex flex-wrap justify-center gap-4 py-8">
        <Card class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
          <template #title>
            <div class="text-center">
              {{ t('index.donate.money.title') }}
            </div>
          </template>
          <template #content>
            <div class="mt-4 flex justify-center px-5">
              <Button
                class="dark:border-blue-600 dark:text-blue-600"
                outlined
                @click="openModal('liqpay')"
              >
                <Svg class="h-4 w-4" name="liqpay"></Svg>
                <span class="ml-2 font-bold">LiqPay</span>
              </Button>
              <Button
                class="ml-2 dark:border-blue-600 dark:text-blue-600"
                outlined
                @click="openModal('paypal')"
              >
                <Icon name="prime:paypal" />
                <span class="ml-2 font-bold">PayPal</span>
              </Button>
            </div>
            <div class="mt-5 px-5 italic">
              {{ t('index.donate.money.messages.text') }}
            </div>
          </template>
        </Card>
        <Card class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
          <template #title>
            <div class="text-center">
              {{ t('index.donate.goods.title') }}
            </div>
          </template>
          <template #subtitle>
            <div class="text-center">
              {{ t('index.donate.goods.messages.title') }}
            </div>
          </template>
          <template #content>
            <ul class="!mt-5 !list-disc !px-5">
              <li>{{ t('index.donate.goods.messages.food') }}</li>
              <li>{{ t('index.donate.goods.messages.medicine') }}</li>
              <li>{{ t('index.donate.goods.messages.bed') }}</li>
              <li>{{ t('index.donate.goods.messages.mobility') }}</li>
              <li>{{ t('index.donate.goods.messages.alternative') }}</li>
            </ul>
          </template>
        </Card>
        <Card class="w-96 basis-full sm:basis-2/5" style="min-width: 300px">
          <template #title>
            <div class="text-center">{{ t('index.donate.volunteer.title') }}</div>
          </template>
          <template #subtitle>
            <div class="text-center">{{ t('index.donate.volunteer.messages.title') }}</div>
          </template>
          <template #content>
            <ul class="!mt-5 !list-disc !px-5">
              <li>{{ t('index.donate.volunteer.messages.transport') }}</li>
              <li>{{ t('index.donate.volunteer.messages.accompany') }}</li>
              <li>{{ t('index.donate.volunteer.messages.work') }}</li>
              <li>{{ t('index.donate.volunteer.messages.help') }}</li>
            </ul>
            <div class="mt-5 px-5 italic">
              {{ t('index.donate.volunteer.messages.text') }}
            </div>
          </template>
        </Card>
      </div>
      <Dialog
        v-model:visible="modals.donate"
        style="max-width: 560px; width: 100%; min-width: 320px"
        modal
        block-scroll
        close-on-escape
      >
        <template #container="{ closeCallback }">
          <Component :is="is[name]" @close="closeCallback" />
        </template>
      </Dialog>
    </div>
  </div>
</template>
