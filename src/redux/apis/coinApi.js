import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { setCoins } from '../features/coinSlice'
import { config } from '../../config/config'

const baseUrl = `${config.SERVER_URL}/api/`

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Coin'],
  endpoints: (builder) => ({
    getCoins: builder.query({
      query() {
        return {
          url: 'coin/'
        }
      },
      transformResponse: (result) =>
        result.coins,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCoins(data));
        } catch (error) { }
      },
    }),
  }),
});

export const {
  useGetCoinsQuery,
} = coinApi;