function CreateForm(props) {
  function submit(event) {
    event.preventDefault();

    props.submitForm({
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    });
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name="name" placeholder="Hot 'n spicy" />
      <input
        type="text"
        name="image"
        placeholder="http://domain/pathtoimage.jpg"
      />
      <input type="text" name="price" placeholder="9.99" />
      <input type="submit" name="Create" />
    </form>
  );
}

export default CreateForm;
