import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    refreshToken: null,
    isAuth: false,
    userId: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            { payload: { accessToken, refreshToken, userId } }
        ) => {
            state.token = accessToken;
            state.refreshToken = refreshToken;
            state.userId = userId;
            state.isAuth = !!state?.token;
        },
        logoutLocally: (state) => {
            state.token = null;
            state.refreshToken = null;
            state.isAuth = false;
            state.userId = "";
        },
    },
});

export const { setCredentials, logoutLocally } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state) => state.auth.token;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUserId = (state) => state.auth.userId;