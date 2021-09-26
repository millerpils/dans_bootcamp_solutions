function Navbar() {
  return (
    <div className="navbar" data-cy="navbar">
      <div className="navbar__inner">
        <div className="container">
          <div className="navbar__heading">
            <a href="/">PizzaHaus</a>
            <span className="heading__sub">"Our dough, your pizza"</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
