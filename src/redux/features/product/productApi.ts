import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => {
        console.log("api hitting", productId);
        return {
          method: "GET",
          url: `/products/${productId}`,
        };
      },
    }),
    createproduct: builder.mutation({
      query: (productData) => ({
        method: "POST",
        url: `/products`,
        body: productData,
      }),
      invalidatesTags: ["products"],
    }),
    deleteproductById: builder.mutation({
      query: (productId) => ({
        method: "DELETE",
        url: `/products/${productId}`,
      }),
      invalidatesTags: ["products"],
    }),
    updateproductById: builder.mutation({
      query: ({ id, productInfo }) => {
        console.log("product api hitting", { id, productInfo });
        return {
          method: "PUT",
          url: `/products/${id}`,
          body: productInfo,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useCreateproductMutation,
  useDeleteproductByIdMutation,
  useUpdateproductByIdMutation,
} = productApi;