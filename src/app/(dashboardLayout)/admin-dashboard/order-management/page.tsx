// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Swal from "sweetalert2";
// import { toast } from "sonner";

// import {
//   useGetAllorderQuery,
//   useDeleteorderByIdMutation,
// } from "@/redux/features/order/orderApi";
// import axiosInstance from "../../../../config/axiosInstance";
// import { TError } from "@/types/gobal";

// const OrderManagement = () => {
//   const { data: orderData, refetch } = useGetAllorderQuery({});
//   const [deleteorderById] = useDeleteorderByIdMutation();

//   const orders = orderData?.data?.result || [];

//   console.log("orders", orders);

//   const handleStatusChange = async (id: string, orderStatus: string) => {
//     console.log(id, orderStatus);
//     try {
//       const res = await axiosInstance.put(`/orders/${id}`, {
//         status: orderStatus,
//       });
//       console.log("res", res);
//       toast.success(`Order status updated to ${orderStatus}`);
//       refetch();
//     } catch (error) {
//       console.error("Failed to update order status:", error);
//       const errorMsg =
//         (error as TError)?.data?.message ||
//         "Failed to update status. Please try again.";
//       toast.error(errorMsg);
//     }
//   };

//   // Handle Order deletion
//   const handleDeleteOrder = async (order: { orderId: any; _id: any }) => {
//     Swal.fire({
//       title: "Confirm Deletion",
//       text: `Are you sure you want to delete Order "${order.orderId}"?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Delete",
//       cancelButtonText: "Cancel",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const toastId = toast.loading("Deleting Order...");

//         try {
//           const response = await deleteorderById(order._id).unwrap();
//           if (response?.message) {
//             toast.success(response.message, { id: toastId });
//           } else {
//             toast.error("Unexpected response received.", { id: toastId });
//           }
//         } catch (err) {
//           const serverErrorMsg =
//             (err as TError)?.data?.message ||
//             "An error occurred while deleting the Order. Please try again.";
//           toast.error(serverErrorMsg, { id: toastId });
//         }
//       }
//     });
//   };

//   return (
//     <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
//       <thead className="bg-gray-500">
//         <tr>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase">
//             Customer Name
//           </th>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase">
//             Payment Status
//           </th>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase">
//             Order Status
//           </th>
//           <th className="px-6 py-3 text-xs font-medium text-gray-100 uppercase text-start">
//             Actions
//           </th>
//         </tr>
//       </thead>
//       <tbody className="bg-gray-600 divide-y divide-gray-200">
//         {orders.map((order) => (
//           <tr key={order._id}>
//             <td className="px-6 py-4 whitespace-nowrap">{order?.user?.name}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-green-400">
//               {order.paymentStatus}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//               <span
//                 className={
//                   order.status === "pending"
//                     ? "text-yellow-400 "
//                     : "text-green-400"
//                 }
//               >
//                 {order.status}
//               </span>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               {order.status === "pending" ? (
//                 <button
//                   onClick={() => handleStatusChange(order._id, "completed")}
//                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Mark Completed
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => handleStatusChange(order._id, "pending")}
//                   className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
//                 >
//                   Mark Pending
//                 </button>
//               )}
//               <button
//                 onClick={() => handleDeleteOrder(order)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 ml-2 rounded"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default OrderManagement;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Swal from "sweetalert2";
import { toast } from "sonner";

import {
  useGetAllorderQuery,
  useDeleteorderByIdMutation,
} from "@/redux/features/order/orderApi";
import axiosInstance from "../../../../config/axiosInstance";
import { TError } from "@/types/gobal";

const OrderManagement = () => {
  const { data: orderData, refetch } = useGetAllorderQuery({});
  const [deleteorderById] = useDeleteorderByIdMutation();

  const orders = orderData?.data?.result || [];

  console.log("orders", orders);

  const handleStatusChange = async (id: string, orderStatus: string) => {
    console.log(id, orderStatus);
    try {
      const res = await axiosInstance.put(`/orders/${id}`, {
        status: orderStatus,
      });
      console.log("res", res);
      toast.success(`Order status updated to ${orderStatus}`);
      refetch();
    } catch (error) {
      console.error("Failed to update order status:", error);
      const errorMsg =
        (error as TError)?.data?.message ||
        "Failed to update status. Please try again.";
      toast.error(errorMsg);
    }
  };

  // Handle Order deletion
  const handleDeleteOrder = async (order: { orderId: any; _id: any }) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: `Are you sure you want to delete Order "${order.orderId}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Deleting Order...");

        try {
          const response = await deleteorderById(order._id).unwrap();
          if (response?.message) {
            toast.success(response.message, { id: toastId });
          } else {
            toast.error("Unexpected response received.", { id: toastId });
          }
        } catch (err) {
          const serverErrorMsg =
            (err as TError)?.data?.message ||
            "An error occurred while deleting the Order. Please try again.";
          toast.error(serverErrorMsg, { id: toastId });
        }
      }
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead className="bg-gray-500">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase">
            Customer Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase">
            Payment Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase">
            Order Status
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-100 uppercase text-start">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-600 divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order._id}>
            <td className="px-6 py-4 whitespace-nowrap">{order?.user?.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-green-400">
              {order.paymentStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <span
                className={
                  order.status === "pending"
                    ? "text-yellow-400 "
                    : "text-green-400"
                }
              >
                {order.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {order.status === "confirmed" ? (
                <button
                  onClick={() => handleStatusChange(order._id, "unconfirmed")}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                >
                  Cancel Confirmation
                </button>
              ) : (
                <button
                  onClick={() => handleStatusChange(order._id, "confirmed")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                >
                  Confirm Order
                </button>
              )}
              <button
                onClick={() => handleDeleteOrder(order)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 ml-2 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderManagement;
