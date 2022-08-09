
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserEmptyState } from '../../models';
import { User } from '../../models/user.type';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state: User, action: PayloadAction<User>) => {
      return action.payload;
    },
    modifyUser: (state: User, action: PayloadAction<User>) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      return UserEmptyState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
