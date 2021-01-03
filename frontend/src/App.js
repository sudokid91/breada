import {BrowserRouter, Route} from "react-router-dom";
import {useSelector} from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">breada</a>
                    </div>
                    <div>
                        <a href="/cart">
                            Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </a>
                        <a href="/signin">Sign In</a>
                    </div>
                </header>
                <main>
                    <Route path={'/'} component={HomeScreen} exact/>
                    <Route path="/product/:id" component={ProductScreen} exact/>
                    <Route path={'/cart/:id?'} component={CartScreen} />
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
