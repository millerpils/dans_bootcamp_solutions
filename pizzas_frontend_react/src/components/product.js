import { Link } from 'react-router-dom';

function Product(props) {
  function handleDelete(event) {
    // props.deleteProduct(event.target.getAttribute('data-id'));
    // call delete function here?
    // redirect home?
  }

  // function handleUpdate(event) {
  //   // props.editProduct(event.target.getAttribute('data-id'));
  // }

  const editUrl = '/pizzas/' + props.data._id + '/edit';

  return (
    <div className="product" data-cy="product">
      <h3>{props.data.name} </h3>
      <img src={props.data.image} alt={props.data.name} />
      <p></p>
      <ul></ul>
      <p>&pound;{props.data.price}</p>
      <div className="promo-blocks__actions">
        <Link to={editUrl} className="anchor--button">
          Edit
        </Link>
        <button data-id={props.data._id} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;
