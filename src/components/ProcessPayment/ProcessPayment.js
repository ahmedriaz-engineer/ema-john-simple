import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51KFHmUGO1sfhJAcpGJTI3SKMfgHFDOJqz7YETEpNXj2Tl3t6GQufIjUN2dZo831kdxEHTQx1QZojCoDtfnTt7YBc00HZKetnVx');

const ProcessPayment = ({handlePayment}) => {
    
    return (
        <div>
            <Elements stripe={stripePromise} >
               <CardForm handlePayment = {handlePayment}></CardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;