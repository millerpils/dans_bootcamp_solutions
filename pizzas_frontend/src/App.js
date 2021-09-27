import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';
import post from './functions/post';
import get from './functions/get';
import update from './functions/update';
import config from './config';

function App() {
  //  [pizzas, setPizzas] = state value and a state updater function.
  const [pizzas, setPizzas] = useState([]); // [] is initial value
  const [pizzaToEdit, setPizzaToEdit] = useState({
    _id: null,
    name: null,
    price: null,
    image: null,
  });

  useEffect(() => {
    // useEffect is like componentDidMount
    getProducts();
  }, []);

  async function postProduct(event) {
    event.preventDefault();
    const newPizzas = await post(event);
    setPizzas((prevPizzas) => [...prevPizzas, newPizzas]);
  }

  async function getProducts() {
    const pizzas = await get();
    if (pizzas.length > 0) return setPizzas(pizzas);
    setPizzas([]);
  }

  async function updateProduct(event) {
    event.preventDefault();
    await update(event);
    getProducts();
  }

  async function deleteProduct(productId) {
    await fetch(config.url + '/' + productId, { method: 'DELETE' });
    getProducts();
  }

  function editProduct(productId) {
    const product = pizzas.find((pizza) => pizza._id === productId);
    setPizzaToEdit(product);
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          <div className="promo-blocks">
            {pizzas.length === 0 && (
              <p>No pizzes to display. Please add some below...</p>
            )}
            {pizzas.map((pizza) => (
              <Product
                key={pizza._id}
                data={pizza}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
              />
            ))}
          </div>
          <hr />
          <div>
            <h2>Add a pizza</h2>
            <form onSubmit={postProduct}>
              <input type="text" name="name" required />
              <input type="text" name="image" required />
              <input type="text" name="price" required />
              <button type="submit" className="button--anchor">
                Create
              </button>
            </form>
          </div>
          <br />
          <div>
            <h2>Update a pizza</h2>
            <form onSubmit={updateProduct} data-productid={pizzaToEdit._id}>
              <input
                type="text"
                name="name"
                required
                placeholder={pizzaToEdit.name}
              />
              <input
                type="text"
                name="image"
                required
                placeholder={pizzaToEdit.image}
              />
              <input
                type="text"
                name="price"
                required
                placeholder={pizzaToEdit.price}
              />
              <button type="submit" className="button--anchor">
                Update
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
