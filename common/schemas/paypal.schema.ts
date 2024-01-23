import { object, string } from 'yup';

export namespace PaypalSchema {
  export const donate = object({
    amount: string().required(),
    currency: string().required(),
    description: string().required(),
    locale: string().required(),
  }).required();

  export const capture = object({
    token: string().required(),
    PayerID: string().required(),
  });
}
