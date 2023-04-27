import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { setActions } from '../features/actionSlice'
import { config } from '../../config/config'

const baseUrl = `${config.SERVER_URL}/api/`

export const actionApi = createApi({
  reducerPath: 'actionApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Action'],
  endpoints: (builder) => ({
    getActions: builder.query({
      query() {
        return {
          url: 'action/'
        }
      },
      transformResponse: (result) =>
        result.actions,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setActions(data));
        } catch (error) { }
      },
    }),
    setActions: builder.mutation({
      query(data) {
        return {
          url: 'action/',
          method: 'POST',
          body: data
        }
      },
      transformResponse: (result) =>
        result.actions,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setActions(data));
        } catch (error) {}
      }
    }),
  }),
});

export const {
  useGetActionsQuery,
  useSetActionsMutation,
} = actionApi;