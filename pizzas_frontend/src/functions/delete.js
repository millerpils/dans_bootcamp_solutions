import config from '../config';

export default async function del(productId) {
  try {
    return await fetch(config.url + '/' + productId, { method: 'DELETE' });
  } catch (error) {
    console.log('Error', error);
  }
}
