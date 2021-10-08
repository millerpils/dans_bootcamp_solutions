import { Link } from 'react-router-dom';
import ProductsAPI from '../api/ProductsAPI';

function Product(props) {
  /**
   * Handle deletion of product
   * @param {*} event
   *
   */
  async function handleDelete(event) {
    const productId = event.target.getAttribute('data-productid');
    const response = ProductsAPI.del(productId);

    response.then((res) => {
      if (res.ok) {
        document.location = '/';
      }
    });
  }

  const editUrl = '/products/' + props.data._id + '/edit';

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
        <button data-productid={props.data._id} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;
