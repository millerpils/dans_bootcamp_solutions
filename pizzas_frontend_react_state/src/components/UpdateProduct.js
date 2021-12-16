import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UpdateProduct(props) {
  const [productName, setProductName] = useState('');
  const [updated, setUpdated] = useState(false);
  const { productId } = useParams();

  /**
   * Update productName after render
   */
  useEffect(() => {
    const thisProduct = props.products.find(
      (prod) => prod.id === parseInt(productId)
    );
    setProductName(thisProduct.name);
  }, [props.products, productId]); // dependencies

  /**
   * Handle the form submit event
   * @param {*} event
   *
   */
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      id: parseInt(productId),
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
    };

    // trigger updated msg
    setUpdated(true);

    // bump up to app component
    props.updateProduct(data);
  }

  return (
    <div>
      <h2>Update: {productName}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required placeholder="Name" />
        <input type="text" name="image" required placeholder="Image URL" />
        <input type="text" name="price" required placeholder="Price" />
        <button type="submit" className="button--anchor">
          Update
        </button>
      </form>
      <p className={`flag--paragraph ${updated ? 'active' : ''}`}>
        {updated && <span>Updated!</span>}
      </p>
    </div>
  );
}

export default UpdateProduct;
