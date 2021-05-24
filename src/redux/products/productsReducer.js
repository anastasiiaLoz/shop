import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addProductsError,
  addProductsRequest,
  addProductsSuccess,
  deleteProductError,
  deleteProductRequest,
  deleteProductSuccess,
  getAllProductsError,
  getAllProductsRequest,
  getAllProductsSuccess
} from "./productsActions";
import { logOut } from "../auth/authActions";

const itemsReducer = createReducer([], {
  [getAllProductsSuccess]: (_, { payload }) => payload,
  [addProductsSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) => [...state.filter(product => product.id !== payload)],
  [logOut]: () => []
});

const loaderReducer = createReducer(false, {
  [getAllProductsRequest]: state => !state,
  [addProductsRequest]: state => !state,
  [deleteProductRequest]: state => !state,
  [getAllProductsError]: state => !state,
  [addProductsError]: state => !state,
  [deleteProductError]: state => !state,
  [getAllProductsSuccess]: state => !state,
  [addProductsSuccess]: state => !state,
  [deleteProductSuccess]: state => !state,
  [logOut]: () => false
});

const errorReducer = createReducer("", {
  [getAllProductsError]: (_, { payload }) => payload,
  [addProductsError]: (_, { payload }) => payload,
  [deleteProductError]: (_, { payload }) => payload,
  [logOut]: () => ""
});

const productsReducer = combineReducers({
  items: itemsReducer,
  isLoading: loaderReducer,
  error: errorReducer
});

export default productsReducer;

// const productsReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'addProduct':
//             return [...state, action.payload];

//         case 'deleteProduct':
//             return [...state.filter((product) => product.id !== action.payload)];

//         case 'getProducts':
//             return action.payload;

//         default:
//             return state;
//     }
// }
// export default productsReducer;
