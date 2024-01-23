import type { LiqPay } from '~/types';
import { object, string, number } from 'yup';

export namespace LiqpaySchema {
  export const donate = object<LiqPay.DonateQuery>({
    amount: number().required().positive(),
    currency: string().required().oneOf(['USD', 'EUR', 'UAH', 'BYN', 'KZT']),
    description: string().required(),
    language: string().required().oneOf(['en', 'uk']),
  }).required();
}
