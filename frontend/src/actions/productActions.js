import {PRODUCT_LIST_FAILED, PRODUCT_LIST_PENDDING, PRODUCT_LIST_SUCCESSED} from "../constants/productConstants";
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