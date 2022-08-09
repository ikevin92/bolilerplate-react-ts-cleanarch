import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { User } from '../models';
import { userReducer } from './slices';

export interface AppStore {
  user: User;
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
