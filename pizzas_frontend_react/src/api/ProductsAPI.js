import config from '../config';

const ProductsAPI = {
  post: async function post(data) {
    try {
      return await fetch(config.url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.log('Error', error);
    }
  },

  get: async function (productId = null) {
    const url = productId ? config.url + `/${productId}` : config.url;

    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
      });
      return await response.json();
    } catch (error) {
      console.log('Error', error);
    }
  },

  update: async function update(productId, data) {
    try {
      return await fetch(config.url + '/' + productId, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.log('Error', error);
    }
  },

  del: async function del(productId) {
    try {
      return await fetch(config.url + '/' + productId, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log('Error', error);
    }
  },
};

export default ProductsAPI;
