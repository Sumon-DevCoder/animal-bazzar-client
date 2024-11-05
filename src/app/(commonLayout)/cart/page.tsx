/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetCartByUserQuery } from "@/redux/features/cart/cartApi"; // Assuming you have a cart API
import useCurrentUserInfo from "../../../hooks/useCurrentUserInfo";
import { TCart } from "@/types/gobal";
import useCurrentUserData from "@/hooks/useCurrentUserInfoData";
import { useCreateorderMutation } from "@/redux/features/order/orderApi";

const MyCart = () => {
  const { user } = useCurrentUserInfo();
  const { currentUserInfo } = useCurrentUserData();
  const { data } = useGetCartByUserQuery(user?.email);
  const [createOrder] = useCreateorderMutation();
  const cartItems = data?.data || [];

  const handleOrder = async () => {
    const orderInfo = {
      user: currentUserInfo,
      // products: cartItems.map((item: { _id: any; quantity: any }) => ({
      //   product: item._id,
      //   quantity: item.quantity,
      // })),

      products: cartItems,
    };

    try {
      const res = await createOrder(orderInfo).unwrap();
      if (res.success) {
        console.log(res);
        window.location.href = res.data.payment_url;
      } else {
        console.error("Order creation failed:", res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const paymentDatas = paymentData?.data || [];

  // const handlePayment = async (cartItem: TCartItem) => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:5001/api/payment/initiate",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ amount: cartItem.price, currency: "BDT" }), // Use cartItem.price
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       console.error("Error initiating payment:", errorData);
  //       alert("Payment initiation failed. Please try again.");
  //       return;
  //     }

  //     const data = await response.json();
  //     console.log("data", data);

  //     if (data.url) {
  //       window.location.href = data.url;
  //     } else {
  //       console.error("Payment URL not found in response.");
  //       alert("Payment initiation failed. No URL returned.");
  //     }
  //   } catch (error) {
  //     console.error("Unexpected error:", error);
  //     alert("An unexpected error occurred. Please try again.");
  //   }
  // };

  return (
    <div>
      <div>
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment status
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems?.map((cartItem: TCart) => (
              <tr key={cartItem?._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {cartItem.productName} {/* Assuming productName exists */}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ${cartItem.price} {/* Assuming productName exists */}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {cartItem.isConfirmed}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {cartItem.paymentStatus}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="btn">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="btn" onClick={handleOrder}>
          Pay Tk poisa
        </button>
      </div>
    </div>
  );
};

export default MyCart;
