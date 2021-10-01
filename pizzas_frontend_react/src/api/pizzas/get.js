import config from '../../config';

export default async function getPizzas(pizzaId = null) {
  const url = pizzaId ? config.url + `/${pizzaId}` : config.url;

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    console.log(url);
    return await response.json();
  } catch (error) {
    console.log('Error', error);
  }
}
