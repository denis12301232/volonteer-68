import type { PayPal } from '~/types';
import { ValidationError } from 'yup';
import { Schema } from '~/validation';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    await Schema.PayPal.Capture.validate(query);
    const config = useRuntimeConfig();
    const auth = `${config.public.PAYPAL_CLIENT_ID}:${config.private.PAYPAL_CLIENT_SECRET}`;
    const url = `${config.private.PAYPAL_CREATE_ORDER_URL}/${query.token}/capture`;
    await $fetch<PayPal.CaptureOrderResponse>(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(auth).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });
    sendRedirect(event, '/');
  } catch (e) {
    if (e instanceof ValidationError) {
      throw createError({ statusCode: 403, message: e.message, cause: e.cause, name: e.name });
    } else {
      throw createError({ statusCode: 500 });
    }
  }
});
