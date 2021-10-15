const url = `http://localhost:8001/restaurants/`;

/**
 *
 * @param {*} btn
 */
async function deleteRestaurant(btn) {
  const dataId = btn.getAttribute('data-id');
  const response = await fetch(url + dataId, { method: 'DELETE' });

  if (response.ok) {
    window.location.reload();
  }
}

/**
 *
 * @param {*} event
 */
async function updateRestaurant(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    id: form.restaurantId.value,
    name: form.name.value,
    imagelink: form.imagelink.value,
  };

  const response = await fetch(url + data.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    window.location = '/restaurants';
  }
}
