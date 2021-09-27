import config from '../config';

export default async function get() {
  try {
    const response = await fetch(config.url, {
      method: 'GET',
      mode: 'cors',
    });
    return await response.json();
  } catch (error) {
    console.log('Error', error);
  }
}
