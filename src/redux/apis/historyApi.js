import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { setHistorys, setTwitterHistorys } from '../features/historySlice'
import { setUserHistorys } from '../features/userSlice'
import { config } from '../../config/config'

const baseUrl = `${config.SERVER_URL}/api/`

export const historyApi = createApi({
  reducerPath: 'historyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['History'],
  endpoints: (builder) => ({
    setHistory: builder.mutation({
      query(data) {
        console.log("setHistory", data)
        return {
          url: 'history/',
          method: 'POST',
          body: data
        }
      },
      transformResponse: (result) =>
        result.historys,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setHistorys(data));
        } catch (error) { }
      },
    }),
    updateHistory: builder.mutation({
      query(data) {
        console.log("updateHistory", data)
        return {
          url: 'history/update',
          method: 'POST',
          body: data
        }
      },
      transformResponse: (result) =>
        result.historys,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setHistorys(data));
        } catch (error) { }
      },
    }),
    setTwitterHistory: builder.mutation({
      query(data) {
        console.log("setTwitterHistory", data)
        return {
          url: 'twitter_history/',
          method: 'POST',
          body: data
        }
      },
    }),
    getHistoryById: builder.query({
      query(id) {
        console.log("getHistoryById", id)
        return {
          url: `history/${id}`
        }
      },
      transformResponse: (result) =>
        result.historys,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getHistoryById_response", data);
          dispatch(setUserHistorys(data));
        } catch (error) { }
      },
    }),
    getHistorys: builder.query({
      query() {
        console.log("getHistorys")
        return {
          url: 'history/'
        }
      },
      transformResponse: (result) =>
        result.historys,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {

          const { data } = await queryFulfilled;
          console.log("getHistorys_response", data);
          dispatch(setHistorys(data));
        } catch (error) { }
      },
    }),
    getTwitterHistory: builder.query({
      query() {
        console.log("getTwitterHistory")
        return {
          url: 'twitter_history/'
        }
      },
      transformResponse: (result) =>
        result.twitter_historys,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getTwitterHistory", data);
          dispatch(setTwitterHistorys(data));
        } catch (error) { }
      }
    }),
  }),
});

export const {
  useGetHistorysQuery,
  useSetHistoryMutation,
  useGetHistoryByIdQuery,
  useSetTwitterHistoryMutation,
  useGetTwitterHistoryQuery,
  useUpdateHistoryMutation
} = historyApi;