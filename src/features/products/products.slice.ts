import { createSlice } from "@reduxjs/toolkit";


export const FETCH_PRODUCTS = 'Products/fetchProducts';
export const FETCH_MORE_PRODUCTS = 'Products/fetchMoreProducts';

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface IFilter { search: string, category: string, page: number, limit: number }

export interface IProductState {
    products: IProduct[],
    total: number,
    currentProduct: null,
    categories: Array<any>,
    loading: boolean,
    detailLoading: boolean,
    error: string | null,
    filters: IFilter,
}

const initialState: IProductState = {
    products: [],
    total: 0,
    currentProduct: null,
    categories: [],
    loading: false,
    detailLoading: false,
    error: null,
    filters: { search: '', category: '', page: 1, limit: 12 },
};

const ProductSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.total = action.payload.total;
            state.error = null;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        appendProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = [...state.products, ...action.payload.products];
            state.total = action.payload.total;
            state.error = null;
        },
        incrementPage: (state) => {
            state.filters.page += 1;
        },
        resetPage: (state) => {
            state.filters.page = 1;
        },
        setProductsSearch:(state, action) => {
            state.filters = {...state.filters,search:action.payload}
        }
    }
});

export default ProductSlice.reducer;
export const ProductActions = ProductSlice.actions;