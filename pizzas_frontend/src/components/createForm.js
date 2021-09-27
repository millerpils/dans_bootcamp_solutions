function CreateForm(props) {
  function submit(event) {
    event.preventDefault();

    props.postProduct({
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    });
  }

  return (
    <div>
      <h2>Add a pizza</h2>
      <form onSubmit={submit}>
        <input type="text" name="name" placeholder="Hot 'n spicy" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="price" placeholder="9.99" />
        <button type="submit" className="button--anchor">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
