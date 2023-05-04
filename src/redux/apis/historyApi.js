import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { addHistory, setHistorys, setAllHistorys } from '../features/historySlice'

const baseUrl = `${process.env.REACT_APP_MINTHOR_PROMO_API_URL}/api/`

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['History'],
    endpoints: (builder) => ({
        setHistory: builder.mutation({
            query(data) {
                return {
                    url: 'history/',
                    method: 'PUT',
                    body: data
                }
            },
            transformResponse: (result) =>
                result.history,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(addHistory(data));
                } catch (error) { }
            }
        }),
        getHistorysByAddress: builder.query({
            query(address) {
                return {
                    url: `history/${address}`
                }
            },
            transformResponse: (result) =>
                result.historys,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setHistorys(data));
                } catch (error) { }
            }
        }),
        getAllHistorys: builder.query({
            query() {
                return {
                    url: 'history/'
                }
            },
            transformResponse: (result) =>
                result.historys,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setAllHistorys(data));
                } catch (error) { }
            }
        }),
    }),
});

export const {
    useSetHistoryMutation,
    useGetAllHistorysQuery,
    useGetHistorysByAddressQuery
} = historyApi;