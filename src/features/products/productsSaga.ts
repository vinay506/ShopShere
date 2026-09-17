import { fetchProductsAPI } from "../../api/endPoints";
import { FETCH_PRODUCTS, ProductActions } from "./products.slice";
import { call, put, select, takeLatest, takeEvery, all, delay } from 'redux-saga/effects';
import type { PayloadAction } from "@reduxjs/toolkit";

function* fetchProductsSaga(action: PayloadAction<{ debounce?: boolean }>) {
    try {

        yield put(ProductActions.fetchProductsStart());
        const { filters } = yield select((state) => state.products);
        const  { search, category, page, limit } = filters;
        const skip = (page - 1) * limit;
        // Debounce search: wait 300ms before firing API when user is typing
        if (action.payload?.debounce) {
            yield delay(300);
        }
       const {data} =  yield call(fetchProductsAPI,{limit, skip,search, category});

        yield put(ProductActions.fetchProductsSuccess(data));
    }

    catch(err: unknown) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        yield put(ProductActions.fetchProductsFailure(message));
    }

}

export function* productWatcherSaga() {
    yield takeLatest(FETCH_PRODUCTS ,fetchProductsSaga);
}
