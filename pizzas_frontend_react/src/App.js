import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateProduct from './components/updateProduct';

function App() {
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
