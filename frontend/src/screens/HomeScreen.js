import data from "../data";
import Product from "../components/Product";

const HomeScreen = () => {
    return (
        <div>
            <div className="row center">
                {data.products.map(item => (
                    <Product key={item._id} product={item}/>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;