import { createAction } from "@reduxjs/toolkit";

export const getAllProductsRequest = createAction("products/getAllProductsRequest");
export const getAllProductsSuccess = createAction("products/getAllProductsSuccess");
export const getAllProductsError = createAction("products/getAllProductsError");

export const addProductsRequest = createAction("products/addProductRequest");
export const addProductsSuccess = createAction("products/addProductSuccess");
export const addProductsError = createAction("products/addProductError");

export const deleteProductRequest = createAction("products/deleteProductRequest");
export const deleteProductSuccess = createAction("products/deleteProductSuccess");
export const deleteProductError = createAction("products/deleteProductError");

// export const getAllProducts = products => {
//     return {
//         type: 'getAllProducts',
//         payload: products
//     }
// };

// export const addProduct = (car) => ({
//     type: 'addProduct',
//     payload: car,
// })

// export const deleteProduct = (id) => ({
//     type: 'deleteProduct',
//     payload: id,
// })
