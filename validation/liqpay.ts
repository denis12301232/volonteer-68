import { object, string, number } from 'yup';

export class LiqPay {
   static Donate = object({
      amount: number().required().positive(),
      currency: string().required().oneOf(['USD', 'EUR', 'UAH', 'BYN', 'KZT']),
      description: string().required(),
      language: string().required().oneOf(['en', 'uk']),
   });
}
