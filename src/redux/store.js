import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { userApi } from './apis/userApi';
import { actionApi } from './apis/actionApi';
import { coinApi } from './apis/coinApi';
import { projectApi } from './apis/projectApi';
import { historyApi } from './apis/historyApi';

import userReducer from './features/userSlice'
import actionReducer from './features/actionSlice'
import coinReducer from './features/coinSlice'
import projectReducer from './features/projectSlice'
import historyReducer from './features/historySlice'

export default configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [actionApi.reducerPath]: actionApi.reducer,
    [coinApi.reducerPath]: coinApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,

    userState: userReducer,
    actionState: actionReducer,
    coinState: coinReducer,
    projectState: projectReducer,
    historyState: historyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userApi.middleware,
      actionApi.middleware,
      coinApi.middleware,
      projectApi.middleware,
      historyApi.middleware,
    ]),
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;