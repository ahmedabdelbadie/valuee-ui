import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInUser, getUserData, updateUser } from "../../Api/api";

export const loginUser = createAsyncThunk("Auth/login", async (name, email, username, phone, password, address, age, role) => {
    const userData = await logInUser(name, email, username, phone, password, address, age, role);
    return userData;
});

export const fetchUserData = createAsyncThunk("Auth/fetchData", async (userId) => {
    const userData = await getUserData(userId);
    return userData;
});

export const updateUserProfile = createAsyncThunk("Auth/updateProfile", async ({ updatedData, userId }) => {
    await updateUser(updatedData, userId);
});

const userSlice = createSlice({
    name: "Auth",
    initialState: {
        isLoggedIn: false,
        accessToken: localStorage.getItem("tkn") || null,
        user: null,
        loading: false,
        error: null,
    },

    reducers: {
        logOut: (state) => {
            state.isLoggedIn = false;
            state.accessToken = null;
            state.user = null;
            localStorage.removeItem("tkn");
            localStorage.removeItem("id");
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.accessToken = action.payload.token;
                state.user = action.payload.user;
                localStorage.setItem("tkn", action.payload.token);
                localStorage.setItem("id", state.user._id);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            });
    },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
