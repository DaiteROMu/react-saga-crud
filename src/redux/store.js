import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

import user from './slices/user';
import users from './slices/users';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        user,
        users,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
