import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7000";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      try {
        const userInfo = Cookies.get("userInfo");
        if (userInfo) {
          const { accessToken } = JSON.parse(userInfo);
          if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
          }
        }
      } catch {
        // ignore parsing errors
      }
      return headers;
    },
  }),
  tagTypes: [
    "Products",
    "Coupon",
    "Product",
    "RelatedProducts",
    "UserOrder",
    "UserOrders",
    "ProductType",
    "OfferProducts",
    "PopularProducts",
    "TopRatedProducts",
  ],
  endpoints: (builder) => ({}), // feature slices will inject their endpoints
});
