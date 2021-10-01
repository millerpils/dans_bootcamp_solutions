function addProduct() {
  function postProduct() {}

  return (
    <div>
      <h2>Add a pizza</h2>
      <form onSubmit={postProduct}>
        <input type="text" name="name" required />
        <input type="text" name="image" required />
        <input type="text" name="price" required />
        <button type="submit" className="button--anchor">
          Create
        </button>
      </form>
    </div>
  );
}

export default addProduct;
