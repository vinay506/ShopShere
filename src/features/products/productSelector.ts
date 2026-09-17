import type { IProductState } from "./products.slice";

export const selectProducts = (state:{products:IProductState}) => state.products.products;
export const selectProductTotal = (state:{products:IProductState}) => state.products.total;
export const selectCurrentProduct = (state:{products:IProductState}) => state.products.currentProduct;
export const selectCategories = (state:{products:IProductState}) => state.products.categories;
export const selectProductLoading = (state:{products:IProductState}) => state.products.loading;
export const selectProductDetailLoading = (state:{products:IProductState}) => state.products.detailLoading;
export const selectProductError = (state:{products:IProductState}) => state.products.error;
export const selectFilters = (state:{products:IProductState}) => state.products.filters;
