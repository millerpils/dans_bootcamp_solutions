/*

TODO:

- Better errror handling. Return error message to component to render
- useContext for global state to avoid too many API requests
- Fix warning "Can't perform a React state update on an unmounted component"
- Validate the forms using Formik/Yup
- Test using react testing lib

*/

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <p>
              <a href="/products/add">Add a product</a>
            </p>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products/add">
                <AddProduct />
              </Route>
              <Route path="/products/:productId/edit">
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
