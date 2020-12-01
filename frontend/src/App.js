import data from './data';
function App() {
    return (
        <div class="grid-container">
            <header class="row">
                <div>
                    <a class="brand" href="/">breada</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div>
                    <div class="row center">
                        {data.products.map(item => (
                            <div key={item._id} className="card">
                                <a href={`product/${item._id}`}>
                                    <img className="medium" src={item.image} alt={item.name}/>
                                </a>
                                <div className="card-body">
                                    <a href={`product/${item._id}`}>
                                        <h2>{item.name}</h2>
                                    </a>
                                    <div className="rating">
                                        <span> <i className="fa fa-star"></i> </span>
                                        <span> <i className="fa fa-star"></i> </span>
                                        <span> <i className="fa fa-star"></i> </span>
                                        <span> <i className="fa fa-star"></i> </span>
                                        <span> <i className="fa fa-star"></i> </span>
                                    </div>
                                    <div className="price">${item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <footer class="row center">All right reserved</footer>
        </div>
    );
}

export default App;
