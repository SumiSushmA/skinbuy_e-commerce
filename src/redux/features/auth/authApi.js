import { apiSlice } from "@/redux/api/apiSlice";
import Cookies from "js-cookie";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/api/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    signUpProvider: builder.mutation({
      query: (token) => ({
        url: `/api/user/register/${token}`,
        method: "POST",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set(
            "userInfo",
            JSON.stringify({
              accessToken: data.data.token,
              user: data.data.user,
            }),
            { expires: 0.5 }
          );
          dispatch(
            userLoggedIn({
              accessToken: data.data.token,
              user: data.data.user,
            })
          );
        } catch {
          // ignore
        }
      },
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set(
            "userInfo",
            JSON.stringify({
              accessToken: data.data.token,
              user: data.data.user,
            }),
            { expires: 0.5 }
          );
          dispatch(
            userLoggedIn({
              accessToken: data.data.token,
              user: data.data.user,
            })
          );
        } catch {
          // ignore
        }
      },
    }),
    getUser: builder.query({
      query: () => "/api/user/me",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userLoggedIn({ user: data }));
        } catch {
          // ignore
        }
      },
    }),
    confirmEmail: builder.query({
      query: (token) => `/api/user/confirmEmail/${token}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set(
            "userInfo",
            JSON.stringify({
              accessToken: data.data.token,
              user: data.data.user,
            }),
            { expires: 0.5 }
          );
          dispatch(
            userLoggedIn({
              accessToken: data.data.token,
              user: data.data.user,
            })
          );
        } catch {
          // ignore
        }
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/api/user/forget-password",
        method: "PATCH",
        body: data,
      }),
    }),
    confirmForgotPassword: builder.mutation({
      query: (data) => ({
        url: "/api/user/confirm-forget-password",
        method: "PATCH",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/api/user/change-password",
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/api/user/update-user/${id}`,
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set(
            "userInfo",
            JSON.stringify({
              accessToken: data.data.token,
              user: data.data.user,
            }),
            { expires: 0.5 }
          );
          dispatch(
            userLoggedIn({
              accessToken: data.data.token,
              user: data.data.user,
            })
          );
        } catch {
          // ignore
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useSignUpProviderMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useConfirmEmailQuery,
  useResetPasswordMutation,
  useConfirmForgotPasswordMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
} = authApi;
