import {all} from "redux-saga/effects";
import { productWatcherSaga } from "../features/products/productsSaga";

export default function* rootSaga() {
   yield all([
        productWatcherSaga()
    ])
}

