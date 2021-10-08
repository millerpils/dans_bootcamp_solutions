import Product from './Product';
import React, { useEffect, useState } from 'react';
import ProductsApi from '../api/ProductsAPI';

export default function Home() {
  // state + state change function
  const [products, setProducts] = useState([]); // [] is initial value

  useEffect(() => {
    let isSubscribed = true;

    getProducts().then((products) =>
      isSubscribed ? setProducts(products) : null
    );

    return () => (isSubscribed = false);
  }, []);

  /**
   * Gets products from API
   *
   * @returns Promise
   */
  async function getProducts() {
    const products = await ProductsApi.get(null);
    return products;
  }

  return (
    <div className="promo-blocks">
      {products.length === 0 && <p>No pizzas to display. Please add some!</p>}
      {products.map((prod) => (
        <Product key={prod._id} data={prod} />
      ))}
    </div>
  );
}
