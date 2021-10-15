/**
 *
 * @param {*} btn
 */
async function deleteRestaurant(btn) {
  const dataId = btn.getAttribute('data-id');
  const response = await fetch(
    `http://localhost:3001/api/restaurants/${dataId}`,
    {
      method: 'DELETE',
    }
  );

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

  console.log(data);

  const response = await fetch(
    `http://localhost:3001/api/restaurants/${data.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) {
    window.location = '/restaurants';
  }
}
