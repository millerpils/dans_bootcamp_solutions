import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import productsJson from './data/pizzas.json';
import { useState } from 'react';

function App() {
  // productsJson could come from API and be set using useEffect
  const [products, setProducts] = useState(productsJson);

  /**
   * Delete a product using ID
   * @param int productId
   */
  function deleteProduct(productId) {
    const newProducts = products.filter(
      (product) => product.id.toString() !== productId
    );

    setProducts(newProducts);
  }

  /**
   * Update the products with data from update component
   * @param {} data
   */
  function updateProduct(data) {
    const index = products.findIndex((prod) => prod.id === parseInt(data.id));
    let newProducts = [...products];
    newProducts.splice(index, 1, data);
    setProducts(newProducts);
  }

  /**
   * Add a new product from form in add component
   * @param {} data
   */
  function addProduct(data) {
    // use spread operator so state isn't mutated outside of updater function
    let newProducts = [...products];
    data.id = products.length + 1;
    newProducts.splice(newProducts.length, 0, data);
    setProducts(newProducts);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home products={products} deleteProduct={deleteProduct} />
              </Route>
              <Route path="/products/add">
                <AddProduct addProduct={addProduct} />
              </Route>
              <Route path="/products/:productId/edit">
                <UpdateProduct
                  products={products}
                  updateProduct={updateProduct}
                />
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
