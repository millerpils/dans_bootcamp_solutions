export default async function post(event) {
  const data = {
    name: event.target.name.value,
    image: event.target.image.value,
    price: parseFloat(event.target.price.value),
  };

  try {
    const response = await fetch('http://localhost:3001/api/pizzas', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
  } catch (error) {
    console.log('Error', error);
  }
}
