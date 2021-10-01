import config from '../../config';

export default async function update(pizzaId, data) {
  try {
    return await fetch(config.url + '/' + pizzaId, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Error', error);
  }
}
