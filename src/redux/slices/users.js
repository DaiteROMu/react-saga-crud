import { createSlice } from '@reduxjs/toolkit';

const users = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsersSlice(state, action) {
            state = action.payload;

            return state;
        },
        createUserSlice(state, action) {
            return [...state, action.payload];
        },
        updateUserSlice(state, action) {
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        ...action.payload,
                    };
                }
                return user;
            });
        },
        deleteUserSlice(state, action) {
            return state.filter((user) => user.id !== action.payload);
        },
    },
});

export const {
    setUsersSlice,
    createUserSlice,
    updateUserSlice,
    deleteUserSlice,
} = users.actions;
export default users.reducer;
