import axios from "axios";
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

const getAllProductsOperation = () => async dispatch => {
  dispatch(getAllProductsRequest());
  try {
    const response = await axios.get(`
        https://shop-fee62-default-rtdb.firebaseio.com/cars.json`);
    // console.log(response);
    if (response.data) {
      const cars = Object.keys(response.data).map(key => ({ ...response.data[key], id: key }));
      dispatch(getAllProductsSuccess(cars));
    } else return;
  } catch (error) {
    dispatch(getAllProductsError(error.response.data.error.message));
    // console.log(error);
  }
};

const addProductOperation = car => async (dispatch, getState) => {
  dispatch(addProductsRequest());

  try {
    const response = await axios.post(
      `https://shop-fee62-default-rtdb.firebaseio.com/cars.json?auth=${getState().auth.tokens.idToken}`,
      car
    );
    dispatch(addProductsSuccess({ ...car, id: response.data.name }));
  } catch (error) {
    dispatch(addProductsError(error.response.data.error.message));
  }
};

const deleteProductOperation = id => async dispatch => {
  dispatch(deleteProductRequest());
  try {
    await axios.delete(`
      https://shop-fee62-default-rtdb.firebaseio.com/cars/${id}.json`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError());
  }
};

export { getAllProductsOperation, addProductOperation, deleteProductOperation };
