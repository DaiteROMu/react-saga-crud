import { useEffect } from 'react';

import {
    Button,
    Container,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { GET_USERS, DELETE_USER } from '../redux/sagas/types';

import { setUserSlice } from '../redux/slices/user';

export const UserTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_USERS });
    }, []);

    const users = useSelector((state) => state.users);

    const handleEditUser = (user) => () => {
        dispatch(setUserSlice(user));
    };

    const handleDeleteUser = (id) => () => {
        dispatch({ type: DELETE_USER, payload: id });
    };

    return (
        <TableContainer component={Paper}>
            {!users?.length ? (
                <CircularProgress />
            ) : (
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell align="center">Commands</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {users?.length &&
                            users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.name}
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.password}</TableCell>
                                    <TableCell align="center">
                                        <Container
                                            sx={{
                                                display: 'flex',
                                                gap: '10px',
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                onClick={handleEditUser(user)}
                                            >
                                                Edit
                                            </Button>

                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={handleDeleteUser(
                                                    user.id
                                                )}
                                            >
                                                Delete
                                            </Button>
                                        </Container>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};

export default UserTable;
