function Product(props) {
  function handleClick(event) {
    const productId = event.target.getAttribute('data-id');
    props.deleteProduct(productId);
  }

  return (
    <div className="product" data-cy="product">
      <h3>{props.data.name} </h3>
      <img src={props.data.image} alt={props.data.name} />
      <p></p>
      <ul></ul>
      <p>&pound;{props.data.price}</p>
      <div className="promo-blocks__actions">
        <button>Edit</button>
        <button data-id={props.data._id} onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;
