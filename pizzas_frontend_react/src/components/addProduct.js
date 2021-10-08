import ProductsApi from '../api/ProductsAPI';
import { useState } from 'react';

function AddProduct() {
  const [updated, setUpdated] = useState(false);

  /**
   * Handle submit of form
   *
   * @param {*} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    };

    const result = await ProductsApi.post(data);

    if (result.ok) {
      setUpdated(true);
    }
  }

  return (
    <div>
      <h2>Add a pizza</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required />
        <input type="text" name="image" required />
        <input type="text" name="price" required />
        <button type="submit" className="button--anchor">
          Create
        </button>
      </form>
      <p className={`flag--paragraph ${updated ? 'active' : ''}`}>
        {updated && <span>Created!</span>}
      </p>
    </div>
  );
}

export default AddProduct;
