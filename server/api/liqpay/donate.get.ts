import type { Query, LiqPay } from '~/types';
import { createHash } from 'node:crypto';
import { Schema } from '~/validation';
import { ValidationError } from 'yup';

export default defineEventHandler((event) => {
  try {
    const query = getQuery<Query.Liqpay.Donate>(event);
    const config = useRuntimeConfig();
    Schema.LiqPay.Donate.validateSync(query);
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
      result_url: `${config.public.DOMAIN_URL}`,
    };

    const data = Buffer.from(JSON.stringify(json)).toString('base64');
    const signature = createHash('sha1')
      .update(config.private.LIQPAY_PRIVATE_KEY + data + config.private.LIQPAY_PRIVATE_KEY)
      .digest('base64');

    return { data, signature };
  } catch (e) {
    if (e instanceof ValidationError) {
      throw createError({ statusCode: 403, message: e.message, cause: e.cause, name: e.name });
    } else {
      throw createError({ statusCode: 500 });
    }
  }
});
