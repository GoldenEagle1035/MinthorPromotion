import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { setUser, setUsers } from '../features/userSlice'
import { setHistorys } from '../features/historySlice'

const baseUrl = `${process.env.REACT_APP_MINTHOR_PROMO_API_URL}/api/`

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        setUser: builder.mutation({
            query(data) {
                return {
                    url: 'user/',
                    method: 'PUT',
                    body: data
                }
            },
            transformResponse: (result) =>
                result.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("setUser_response", data);
                    dispatch(setUser(data));
                } catch (error) { }
            }
        }),
        getUserByAddress: builder.query({
            query(address) {
                return {
                    url: `user/${address}`
                }
            },
            transformResponse: (result) =>
                result.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("getUserByAddress_response", data);
                    dispatch(setUser(data));
                } catch (error) { }
            }
        }),
        getAllUsers: builder.query({
            query() {
                return {
                    url: 'user/'
                }
            },
            transformResponse: (result) =>
                result.users,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("getAllUsers_response", data);
                    dispatch(setUsers(data));
                } catch (error) { }
            }
        }),
        claim: builder.mutation({
            query(data) {
                return {
                    url: 'user/claim/',
                    method: 'PUT',
                    body: data
                }
            },
            transformResponse: (result) =>
                result,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log("claim_response", data);
                    dispatch(setUser(data.user));
                    dispatch(setHistorys(data.historys));
                } catch (error) { }
            }
        })
    }),
});

export const {
    useSetUserMutation,
    useGetUserByAddressQuery,
    useGetAllUsersQuery,
    useClaimMutation
} = userApi;