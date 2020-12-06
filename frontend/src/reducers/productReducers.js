import {PRODUCT_LIST_FAILED, PRODUCT_LIST_PENDDING, PRODUCT_LIST_SUCCESSED} from "../constants/productConstants";

const initialState = { products: [], loading: true};
export const productReducers = (state = initialState , action) => {
    switch (action.type) {
        case PRODUCT_LIST_PENDDING:
            return {loading: true};
        case PRODUCT_LIST_SUCCESSED:
            return {loading: false, products: action.products};
        case PRODUCT_LIST_FAILED:
            return {loading: false, error: action.msgError};
        default:
            return state;
    }
};