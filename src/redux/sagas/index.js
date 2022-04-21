import { all } from 'redux-saga/effects';

import { watchUsersAsync } from './users';

export function* rootSaga() {
    yield all([watchUsersAsync()]);
}
