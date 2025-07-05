import { apiSlice } from "@/redux/api/apiSlice";
import { set_client_secret } from "./orderSlice";

export const orderApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // createPaymentIntent
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "/api/order/create-payment-intent",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          // stripe client secret lives under data.clientSecret
          dispatch(set_client_secret(data.clientSecret));
        } catch {
          // ignore
        }
      },
    }),

    // saveOrder
    saveOrder: builder.mutation({
      query: (data) => ({
        url: "/api/order/saveOrder",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserOrders"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          // clear out local storage only after a successful save
          localStorage.removeItem("couponInfo");
          localStorage.removeItem("cart_products");
          localStorage.removeItem("shipping_info");
        } catch {
          // ignore
        }
      },
    }),

    // getUserOrders
    getUserOrders: builder.query({
      query: () => "/api/user-order",
      providesTags: ["UserOrders"],
      keepUnusedDataFor: 600,
    }),

    // getUserOrderById
    getUserOrderById: builder.query({
      query: (id) => `/api/user-order/${id}`,
      providesTags: (result, error, id) => [{ type: "UserOrder", id }],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useSaveOrderMutation,
  useGetUserOrdersQuery,
  useGetUserOrderByIdQuery,
} = orderApi;
