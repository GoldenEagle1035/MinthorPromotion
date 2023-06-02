import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

import { entriesApi } from './apis/entriesApi';

import entriesReducer from './features/entriesSlice';

export const store = configureStore({
  reducer: {
    [entriesApi.reducerPath]: entriesApi.reducer,

    entriesState: entriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      entriesApi.middleware,
    ]),
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;