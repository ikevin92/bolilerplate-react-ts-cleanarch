import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ApiUser } from '../models';
import { userReducer } from './slices';

export interface AppStore {
  user: ApiUser;
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
