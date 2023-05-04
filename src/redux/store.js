import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

import { walletApi } from './apis/walletApi';
import { userApi } from './apis/userApi';
import { historyApi } from './apis/historyApi';

import walletReducer from './features/walletSlice';
import userReducer from './features/userSlice';
import historyReducer from './features/historySlice';

export default configureStore({
  reducer: {
    [walletApi.reducerPath]: walletApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,

    walletState: walletReducer,
    userState: userReducer,
    historyState: historyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      walletApi.middleware,
      userApi.middleware,
      historyApi.middleware,
    ]),
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;