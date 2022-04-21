import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    name: '',
    email: '',
    password: '',
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserSlice(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;

            return state;
        },
        resetUserSlice() {
            return initialState;
        },
    },
});

export const { setUserSlice, resetUserSlice } = user.actions;

export default user.reducer;
