import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { setProjects } from '../features/projectSlice'
import { config } from '../../config/config'

const baseUrl = `${config.SERVER_URL}/api/`

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query() {
        return {
          url: 'project/'
        }
      },
      transformResponse: (result) =>
        result.projects,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProjects(data));
        } catch (error) { }
      },
    }),
    setDailyLimit: builder.mutation({
      query(data) {
        return {
          url: `project/daily_limit/`,
          method: 'POST',
          body: data
        }
      },
      transformResponse: (result) =>
        result.projects,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProjects(data));
        } catch (error) {}
      }
    }),
  }),  
});

export const {
  useGetProjectsQuery,
  useSetDailyLimitMutation,
} = projectApi;