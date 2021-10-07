import Product from './product';
import React, { useEffect, useState } from 'react';
import getPizzas from '../api/pizzas/get';

export default function Home() {
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

  return (
    <div className="promo-blocks">
      {pizzas.length === 0 && <p>No pizzas to display. Please add some!</p>}
      {pizzas.map((pizza) => (
        <Product key={pizza._id} data={pizza} />
      ))}
    </div>
  );
}
