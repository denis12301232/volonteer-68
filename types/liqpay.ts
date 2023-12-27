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
    rro_info?: {
      items?: { amount: number; cost: number; id: number; price: number }[];
      delivery_emails?: string[];
    };
    expired_date?: string;
    language?: 'en' | 'uk';
    paytypes?: string;
    result_url?: string;
    server_url?: string;
    verifycode?: string;
    split_rules?: string;
    sender_address?: string;
    sender_city?: string;
    sender_country_code?: string;
    sender_first_name?: string;
    sender_last_name?: string;
    sender_postal_code?: string;
    letter_of_credit?: string;
    letter_of_credit_date?: string;
    subscribe?: string;
    subscribe_date_start?: string;
    subscribe_periodicity?: string;
    customer?: string;
    recurringbytoken?: string;
    customer_user_id?: string;
    dae?: string;
    info?: string;
    product_category?: string;
    product_description?: string;
    product_name?: string;
    product_url?: string;
  }
}
