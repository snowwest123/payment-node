// 支付服务（如调用 PayPal API）

import paypal from 'paypal-rest-sdk';

paypal.configure({
  mode: 'sandbox', 
  client_id: 'your_client_id',
  client_secret: 'your_client_secret',
});

export const processPayment = (amount) => {
  const payment = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    transactions: [{
      amount: { total: amount, currency: 'USD' },
      description: 'Payment for transaction',
    }],
    redirect_urls: {
      return_url: 'http://localhost:3000/payment/success',
      cancel_url: 'http://localhost:3000/payment/cancel',
    },
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, (error, payment) => {
      if (error) {
        reject(error);
      } else {
        resolve(payment);
      }
    });
  });
};