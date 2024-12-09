/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axiosInstance from "@/config/axiosInstance";
import { useGetCartByUserQuery } from "@/redux/features/cart/cartApi";
import useCurrentUserInfo from "@/hooks/useCurrentUserInfo";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { email } = useCurrentUserInfo();
  const { data } = useGetCartByUserQuery(email);

  const cartItems = data?.data || [];

  const totalPrice = cartItems.reduce(
    (prev: any, current: { price: any }) => prev + current.price,
    0
  );

  console.log("totalPrice", totalPrice);

  useEffect(() => {
    const res = axiosInstance.post("/create-payment-intent", {
      price: totalPrice,
    });

    console.log("res", res);
  }, [totalPrice]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
