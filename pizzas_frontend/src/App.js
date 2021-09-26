import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001/api/pizzas';

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
        });
        const json = await response.json();
        setPizzas(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          <div className="promo-blocks products">
            {pizzas.map((pizza) => (
              <Product key={pizza._id} data={pizza} />
            ))}
          </div>
          <hr />
          <button>Add new pizza</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
