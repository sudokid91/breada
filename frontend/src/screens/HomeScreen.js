import {useState, useEffect} from "react";
import axios from 'axios';

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const HomeScreen = () => {
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios.get('/api/products')
            .then(products => {
                setProducts(products.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(`error fetch products: ${JSON.stringify(err)}`);
                setLoading(false);
                setError(err.message);
            });
    }, []);
    console.log(`products: ${JSON.stringify(products)}`);
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