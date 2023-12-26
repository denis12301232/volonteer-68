import { object, string } from 'yup';

export class PayPal {
  static Donate = object({
    amount: string().required(),
    currency: string().required(),
    description: string().required(),
    locale: string().required(),
  }).required();

  static Capture = object({
    token: string().required(),
    PayerID: string().required(),
  });
}
