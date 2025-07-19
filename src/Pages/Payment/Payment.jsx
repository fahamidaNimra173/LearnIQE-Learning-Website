import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
               <PaymentForm></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;