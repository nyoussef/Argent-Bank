import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token:'',
    user: null,
    userLoading: false,
    usernameLoading: false,
    error: null,
  },
  reducers: {
    loginUserRequest: (state) => {
        state.userLoading = true;
    }, 
    loginUserSuccess: (state, action) => {        
        state.userLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
    },
    loginUserFailed: (state, action) => {
        state.userLoading = false;
        state.error = action.payload;
    },
    logOut: (state) => {
      state.token = '';
      state.user = null;
      state.userLoading = false;
      state.usernameLoading = false;
    },
    updateUsernameRequest: (state) => {
      state.usernameLoading = true;
    },
    updateUsernameSuccess: (state, action) => {
      state.usernameLoading = false;
      state.user = { ...state.user, userName: action.payload.userName };
    },
    updateUsernameFailed: (state, action) => {
      state.usernameLoading = false;
      state.error = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUserFailed, loginUserRequest, loginUserSuccess, logOut, updateUsernameRequest, updateUsernameSuccess, updateUsernameFailed} = userSlice.actions

export default userSlice.reducer