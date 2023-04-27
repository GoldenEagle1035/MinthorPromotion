import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { setUser } from '../features/userSlice'
import { config } from '../../config/config'

const baseUrl = `${config.SERVER_URL}/api/`

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        setUser: builder.mutation({
            query(data) {
                return {
                    url: 'user/',
                    method: 'POST',
                    body: data
                }
            },
            transformResponse: (result) =>
                result.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));
                } catch (error) { }
            },
        }),
    }),
});

export const {
    useSetUserMutation
} = userApi;