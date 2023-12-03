import type { Query, LiqPay } from '~/types';
import { createHash } from 'node:crypto';

export default defineEventHandler(async (event) => {
   const query = getQuery<Query.Liqpay.Donate>(event);
   const config = useRuntimeConfig();
   const json: LiqPay.Json = {
      version: 3,
      public_key: config.public.LIQPAY_PUBLIC_KEY,
      private_key: config.private.LIQPAY_PRIVATE_KEY,
      action: 'paydonate',
      amount: query.amount,
      currency: query.currency,
      description: query.description,
      order_id: Date.now() + Math.random().toString(),
      language: query.language,
   };
   const data = Buffer.from(JSON.stringify(json)).toString('base64');
   const signature = createHash('sha1')
      .update(config.private.LIQPAY_PRIVATE_KEY + data + config.private.LIQPAY_PRIVATE_KEY)
      .digest('base64');

   return { data, signature };
});
