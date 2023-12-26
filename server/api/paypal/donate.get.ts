import type { Query, PayPal } from '~/types';
import { ValidationError } from 'yup';
import { Schema } from '~/validation';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<Query.Paypal.Donate>(event);
    await Schema.PayPal.Donate.validate(query);
    const config = useRuntimeConfig();
    const auth = `${config.public.PAYPAL_CLIENT_ID}:${config.private.PAYPAL_CLIENT_SECRET}`;
    const response = await $fetch<PayPal.CreateOrderResponse>(
      config.private.PAYPAL_CREATE_ORDER_URL,
      {
        body: {
          purchase_units: [
            {
              amount: {
                currency_code: query.currency,
                value: query.amount,
                breakdown: { item_total: { currency_code: query.currency, value: query.amount } },
              },
              description: query.description,
              items: [
                {
                  category: 'DONATION',
                  name: query.description,
                  unit_amount: { value: query.amount, currency_code: query.currency },
                  quantity: '1',
                },
              ],
            },
          ],
          application_context: {
            locale: query.locale,
            user_action: 'PAY_NOW',
            return_url: `${config.public.DOMAIN_URL}/api/paypal/capture`,
          },
          intent: 'CAPTURE',
        } as PayPal.CreateOrderRequestBody,
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(auth).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (e) {
    if (e instanceof ValidationError) {
      throw createError({ statusCode: 403, message: e.message, cause: e.cause, name: e.name });
    } else {
      throw createError({ statusCode: 500 });
    }
  }
});
