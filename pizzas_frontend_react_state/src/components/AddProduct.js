import { useState } from 'react';

function AddProduct(props) {
  const [updated, setUpdated] = useState(false);

  /**
   * Handle submit of form
   *
   * @param {*} event
   */
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      id: null, // gets added in app component
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
    };

    // trigger updated msg
    setUpdated(true);

    // bump up to app component
    props.addProduct(data);
  }

  return (
    <div>
      <h2>Add a pizza</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="image" placeholder="URL" required />
        <input type="text" name="price" placeholder="Price" required />
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
