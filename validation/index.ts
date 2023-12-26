import { LiqPay as liqpay } from './liqpay';
import { Report as report } from './report';
import { PayPal as paypal } from './paypal';

export namespace Schema {
  export const LiqPay = liqpay;
  export const Report = report;
  export const PayPal = paypal;
}
