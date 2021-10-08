import { useParams } from 'react-router-dom';
import ProductsAPI from '../api/ProductsAPI';
import { useState, useEffect } from 'react';

function UpdateProduct() {
  const [productName, setProductName] = useState('');
  const [updated, setUpdated] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    /**
     * Get pizza name for display. Global state probs better here
     *
     */
    async function getProductName() {
      const product = await ProductsAPI.get(productId);
      setProductName(product.name);
    }

    getProductName();
  });

  /**
   * Handle the form submit event
   * @param {*} event
   *
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    };

    const result = await ProductsAPI.update(productId, data);

    if (result.ok) {
      setUpdated(true);

      setTimeout(() => {
        setUpdated(false);
      }, 2000);
    }
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
