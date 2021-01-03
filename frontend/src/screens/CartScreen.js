import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartActions";

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number (props.location.search.split('=')[1]) :  10;
    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(addToCart(productId, qty))
    }, [dispatch, productId, qty]);

    return (
        <div>
            <h1>
                Cart screen
            </h1>
            <p>ADD TO CART: ProductID : {productId} and Qty: {qty}</p>
        </div>
    );
};

export default CartScreen;