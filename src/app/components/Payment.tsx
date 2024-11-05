import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P0MsXP4EIINmDPdY5PvdQAa7TkzoxRJpSmFkrmgZzKIoD1z2HwErrrwIm7jkmpcjyKSRBiMkVmjGU6SsSbRuOMy00MMnZmO3Q"
);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
