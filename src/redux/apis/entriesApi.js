import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = `${process.env.REACT_APP_LOTTORY_API_URL}/api/`

export const entriesApi = createApi({
    reducerPath: 'entriesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Entries'],
    endpoints: (builder) => ({
        
    }),
});

export const {
} = entriesApi;