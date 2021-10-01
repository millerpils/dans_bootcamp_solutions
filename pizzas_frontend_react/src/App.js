import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';
// import post from './api/post';
import getPizzas from './api/pizzas/get';
// import update from './api/update';
// import del from './api/delete';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateProduct from './components/updateProduct';

function App() {
  //  [pizzas, setPizzas] = state value and a state updater function.
  const [pizzas, setPizzas] = useState([]); // [] is initial value
  // const [pizzaToEdit, setPizzaToEdit] = useState({
  //   _id: null,
  //   name: null,
  //   price: null,
  //   image: null,
  // });

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const pizzas = await getPizzas(null);
    if (pizzas.length > 0) return setPizzas(pizzas);
    setPizzas([]);
  }
  // async function postProduct(event) {
  //   event.preventDefault();
  //   const newPizzas = await post(event);
  //   setPizzas((prevPizzas) => [...prevPizzas, newPizzas]);
  // }

  // async function updateProduct(event) {
  //   event.preventDefault();
  //   await update(event);
  //   getProducts();
  // }

  // async function deleteProduct(productId) {
  //   await del(productId);
  //   getProducts();
  // }

  // function editProduct(productId) {
  //   const product = pizzas.find((pizza) => pizza._id === productId);
  //   setPizzaToEdit(product);
  // }

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
