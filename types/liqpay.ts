export namespace LiqPay {
  export interface Json {
    version: number;
    public_key: string;
    private_key: string;
    action: 'pay' | 'hold' | 'subscribe' | 'paydonate' | 'auth';
    amount: number;
    currency: 'USD' | 'EUR' | 'UAH' | 'BYN' | 'KZT';
    description: string;
    order_id: string;
    language?: 'en' | 'uk';
  }
}
