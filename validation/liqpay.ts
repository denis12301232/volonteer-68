import { object, string, number } from 'yup';

export const DonateSchema = object({
   amount: number().required().positive(),
   currency: string().required().oneOf(['USD', 'EUR', 'UAH', 'BYN', 'KZT']),
   description: string().required(),
   language: string().required().oneOf(['en', 'uk']),
});
