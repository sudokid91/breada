import {
    PRODUCT_DETAILS_PENDDING,
    PRODUCT_DETAILS_SUCCESSED,
    PRODUCT_DETAILS_FAILED,
    PRODUCT_LIST_FAILED,
    PRODUCT_LIST_PENDDING,
    PRODUCT_LIST_SUCCESSED
} from "../constants/productConstants";
import Axios from "axios";

export const listProducts = () => async (dispath) => {
  dispath({type: PRODUCT_LIST_PENDDING});
  try {
      const data = await Axios.get('/api/products');
      dispath({type: PRODUCT_LIST_SUCCESSED, products: data.data});
  } catch (err) {
      dispath({type: PRODUCT_LIST_FAILED, msgError: err.message});
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_PENDDING, payload: productId });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESSED, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};