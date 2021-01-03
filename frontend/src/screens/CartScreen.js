const CartScreen = (props) => {
console.log(`props: ${JSON.stringify(props)}`);
    const productId = props.match.params.id;
    const qty = props.location.search ? Number (props.location.search.split('=')[1]) :  10;

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