import {
    getUsersAPI,
    getUserByIdAPI,
    createUserAPI,
    updateUserAPI,
    deleteUserAPI,
} from '../../api';

import {
    GET_USERS,
    GET_USER_BY_ID,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
} from './types';

import { put, takeEvery } from 'redux-saga/effects';

import { setUserSlice } from '../slices/user';
import {
    setUsersSlice,
    createUserSlice,
    updateUserSlice,
    deleteUserSlice,
} from '../slices/users';

function* getUsersSaga() {
    const users = yield getUsersAPI();
    yield put(setUsersSlice(users));
}

function* getUserSaga(action) {
    const user = yield getUserByIdAPI(action.id);
    yield put(setUserSlice(user));
}

function* createUserSaga(action) {
    const id = yield createUserAPI(action.payload);

    yield put(createUserSlice({ ...action.payload, id }));
}

function* updateUserSaga(action) {
    yield updateUserAPI(action.payload);
    yield put(updateUserSlice(action.payload));
}

function* deleteUserSaga(action) {
    yield deleteUserAPI(action.payload);
    yield put(deleteUserSlice(action.payload));
}

export function* watchUsersAsync() {
    yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(GET_USER_BY_ID, getUserSaga);
    yield takeEvery(CREATE_USER, createUserSaga);
    yield takeEvery(UPDATE_USER, updateUserSaga);
    yield takeEvery(DELETE_USER, deleteUserSaga);
}
