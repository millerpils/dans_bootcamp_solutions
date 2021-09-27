function EditForm(props) {
  function submit(event) {}

  return (
    <div>
      <h2>Update a pizza</h2>
      <form onSubmit={submit}>
        <input type="text" name="name" />
        <input type="text" name="image" />
        <input type="text" name="price" />
        <button type="submit" className="button--anchor">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
