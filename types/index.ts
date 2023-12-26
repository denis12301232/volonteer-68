import type { LiqPay } from './liqpay';
export * from './liqpay';
export * from './paypal';

export type ITheme = 'dark' | 'light';

export namespace Query {
  export namespace Liqpay {
    export type Donate = Pick<LiqPay.Json, 'amount' | 'currency' | 'description' | 'language'>;
  }

  export namespace Paypal {
    export type Donate = {
      amount: string;
      currency: 'USD';
      description: string;
      locale: string;
    };
  }

  export namespace Report {
    export interface Index {
      skip: number;
      limit: number;
    }
  }
}

// fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
//     Authorization:
//       'Bearer 6V7rbVwmlM1gFZKW_8QtzWXqpcwQ6T5vhEGYNJDAAdn3paCgRpdeMdVYmWzgbKSsECednupJ3Zx5Xd-g',
//   },
//   body: JSON.stringify(),
// });
