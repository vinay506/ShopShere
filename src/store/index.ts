import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/products/products.slice';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({thunk:true}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
