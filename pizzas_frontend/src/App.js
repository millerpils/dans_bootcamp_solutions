import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import CreateForm from './components/createForm';
import React, { useEffect, useState } from 'react';

const url = 'http://localhost:3001/api/pizzas';

function App() {
  //  [pizzas, setPizzas] = state value and a state updater function.
  //  useState([]) array is initial value
  const [pizzas, setPizzas] = useState([]);

  // useEffect is like componentDidMount
  useEffect(() => {
    async function fetchData() {
      console.log(pizzas);
      try {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
        });
        const json = await response.json();
        if (json.length > 0) {
          setPizzas(json);
        }
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchData();
  }, []); // [] only rerun if var in here changes

  async function submitForm(formData) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    setPizzas([...pizzas, json]);
  }

  async function deleteProduct(productId) {
    await fetch(url + '/' + productId, {
      method: 'DELETE',
    });

    const index = pizzas.findIndex((pizza) => pizza._id === productId);
    pizzas.splice(index, 1);
    pizzas.length > 0 ? setPizzas([pizzas]) : setPizzas([]);
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          {pizzas.map((pizza) => (
            <Product
              key={pizza._id}
              data={pizza}
              deleteProduct={deleteProduct}
            />
          ))}

          <hr />
          <CreateForm submitForm={submitForm} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
