import { Link } from 'react-router-dom';

function Product(props) {
  const editUrl = '/products/' + props.product.id + '/edit';

  /**
   * Handle deletion of product
   * @param {*} event
   *
   */
  async function handleDelete(event) {
    props.deleteProduct(event.target.getAttribute('data-productid'));
  }

  return (
    <div className="product">
      <h3>{props.product.name} </h3>
      <img src={props.product.image} alt={props.product.name} />

      <p>&pound;{props.product.price}</p>
      <div className="promo-blocks__actions">
        <Link to={editUrl} className="anchor--button">
          Edit
        </Link>
        <button data-productid={props.product.id} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;
