import {useEffect} from "react";

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

const HomeScreen = () => {
    const productsList = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const {loading, error, products} = productsList;
    useEffect(() => {
        dispatch(listProducts());
    }, []);
    return (
        <div>
            {loading ? <LoadingBox /> : error ? <MessageBox variant="danger" message={error}/> : (
                <div className="row center">
                    {products.map(item => (
                        <Product key={item._id} product={item}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomeScreen;