import { useParams } from 'react-router-dom';
import updatePizza from '../api/pizzas/update';
import getPizzas from '../api/pizzas/get';
import { useState, useEffect } from 'react';

function UpdateProduct() {
  const [pizzaName, setPizzaName] = useState('');
  const [updated, setUpdated] = useState(false);

  const { pizzaId } = useParams();

  useEffect(() => {
    getPizzaName();
  });

  async function getPizzaName() {
    const pizza = await getPizzas(pizzaId);
    setPizzaName(pizza.name);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: parseFloat(event.target.price.value),
    };

    const result = await updatePizza(pizzaId, data);

    if (result.ok) {
      setUpdated(true);

      setTimeout(() => {
        setUpdated(false);
      }, 2000);
    }
  }

  return (
    <div>
      <h2>Update: {pizzaName}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required placeholder="Name" />
        <input type="text" name="image" required placeholder="Image URL" />
        <input type="text" name="price" required placeholder="Price" />
        <button type="submit" className="button--anchor">
          Update
        </button>
      </form>
      {updated && <p>Updated!</p>}
    </div>
  );
}

export default UpdateProduct;
