function Product(props) {
  return (
    <div className="product" data-cy="product">
      <h3>{props.data.name} </h3>
      <img src={props.data.image} alt={props.data.name} />
      <p></p>
      <ul></ul>
      <p>&pound;{props.data.price}</p>
      <div className="promo-blocks__actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Product;
