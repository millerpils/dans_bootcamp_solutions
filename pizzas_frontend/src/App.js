import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';

const url = 'http://localhost:3001/api/pizzas';

function App() {
  //  [pizzas, setPizzas] = state value and a state updater function.
  //  useState([]) array is initial value
  const [pizzas, setPizzas] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState({});

  // useEffect is like componentDidMount
  useEffect(() => {
    getProducts();
  }, []); // [] do something with the data AFTER async added

  async function getProducts() {
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
      });
      const json = await response.json();
      if (json.length > 0) {
        return setPizzas(json);
      }
      setPizzas([]);
    } catch (error) {
      console.log('error', error);
    }
  }

  async function postProduct(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    setPizzas((prevPizzas) => [...prevPizzas, json]);
  }

  async function deleteProduct(productId) {
    await fetch(url + '/' + productId, {
      method: 'DELETE',
    });

    getProducts();
  }

  function editProduct(productId) {
    const product = pizzas.find((pizza) => pizza._id === productId);
    setPizzaToEdit(product);
  }

  async function updateProduct(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    };

    const response = await fetch(
      url + '/' + event.target.getAttribute('data-id'),
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const json = await response.json();
    console.log(json);
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
            <form onSubmit={updateProduct} data-id={pizzaToEdit._id}>
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
