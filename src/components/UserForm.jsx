import React from 'react';

import { Button, Input, Stack } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { CREATE_USER, UPDATE_USER } from '../redux/sagas/types';

import { setUserSlice, resetUserSlice } from '../redux/slices/user';

const UserForm = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
    };

    const handleSubmit = () => {
        if (user.id != 0) {
            dispatch({ type: UPDATE_USER, payload: user });
        } else {
            dispatch({ type: CREATE_USER, payload: user });
        }

        dispatch(resetUserSlice());
    };

    return (
        <Stack spacing={2}>
            <Input
                value={user.name}
                placeholder="Enter name"
                onChange={handleChange('name')}
                fullWidth
            />
            <Input
                value={user.email}
                placeholder="Enter email"
                onChange={handleChange('email')}
                fullWidth
            />
            <Input
                value={user.password}
                placeholder="Enter password"
                onChange={handleChange('password')}
                fullWidth
            />

            <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                fullWidth
            >
                Submit
            </Button>
        </Stack>
    );
};

export default UserForm;
