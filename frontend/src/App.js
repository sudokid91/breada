import data from './data';
import Product from "./components/Product";
function App() {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">breada</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div>
                    <div className="row center">
                        {data.products.map(item => (
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    );
}

export default App;
