// 支付服务（如调用 PayPal API）

import paypal from 'paypal-rest-sdk';
import axios from "axios";

paypal.configure({
  mode: 'sandbox', 
  client_id: 'your_client_id',
  client_secret: 'your_client_secret',
});

const TRANSACTION_BASEURL = process.env.TRANSACTION_BASEURL;

export const processPayment = async ({amount, userId}) => {

  
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


  try {
    // create payment
    const paymentResult = await new Promise((resolve, reject) => {
      // paypal.payment.create(payment, (error, payment) => {
      //   if (error) {
      //     reject(error);
      //   } else {
      //     resolve(payment);
      //   }
      // });
      resolve({ id: 'payment_id' });
    });
    // console.log(paymentResult, 'req.body221');

    //record transaction
    const transactionResult = await axios.post(`${TRANSACTION_BASEURL}/api/createTransaction`, {
      userId,
      amount,
      type: 'payment'
    });



    return { payment: paymentResult, transaction: transactionResult.data };
  } catch (error) {
    // if payment fails, rollback transaction
    if (error.response && error.response.status === 500) {
      
    }
    throw new Error('Payment processing failed');
  }
};