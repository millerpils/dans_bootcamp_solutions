import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import CreateOrUpdateForm from './components/createForm';
import React, { useEffect, useState } from 'react';

const url = 'http://localhost:3001/api/pizzas';

function App() {
  //  [pizzas, setPizzas] = state value and a state updater function.
  //  useState([]) array is initial value
  const [pizzas, setPizzas] = useState([]);

  // useEffect is like componentDidMount
  useEffect(() => {
    getProducts();
  }, []);

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

  async function postProduct(formData) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
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
              />
            ))}
          </div>
          <hr />
          <CreateOrUpdateForm postProduct={postProduct} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
