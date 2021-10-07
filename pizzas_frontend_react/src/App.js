import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';
// import post from './api/post';
// import update from './api/update';
// import del from './api/delete';
import getPizzas from './api/pizzas/get';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateProduct from './components/updateProduct';

function App() {
  // state + state change function
  const [pizzas, setPizzas] = useState([]); // [] is initial value

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const pizzas = await getPizzas(null);
    if (pizzas.length > 0) return setPizzas(pizzas);
    setPizzas([]);
  }

  function Home() {
    return (
      <div className="promo-blocks">
        {pizzas.length === 0 && <p>No pizzas to display. Please add some!</p>}
        {pizzas.map((pizza) => (
          <Product key={pizza._id} data={pizza} />
        ))}
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/pizzas/:pizzaId/edit">
                <UpdateProduct />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
