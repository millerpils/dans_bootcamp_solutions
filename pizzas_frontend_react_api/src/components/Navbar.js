import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar" data-cy="navbar">
      <div className="navbar__inner">
        <div className="container">
          <div className="navbar__heading">
            <Link to="/">PizzaHaus</Link>
            <span className="heading__sub">"Our dough, your pizza"</span>
          </div>
          <ul className="navbar__navigation">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
