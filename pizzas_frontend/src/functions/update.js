import config from '../config';

export default async function update(event) {
  const data = {
    name: event.target.name.value,
    image: event.target.image.value,
    price: parseFloat(event.target.price.value),
  };

  try {
    return await fetch(
      config.url + '/' + event.target.getAttribute('data-productid'),
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.log('Error', error);
  }
}
