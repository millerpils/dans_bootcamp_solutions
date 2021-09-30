async function deleteRestaurant(btn) { 
  const id = btn.getAttribute("data-id")
  const url = `http://localhost:8001/restaurants/${id}` 
  const response = await fetch(url, { method: "DELETE" })

  if (response.ok) {
    window.location.reload()
  }
}

async function updateRestaurant(event) {
  event.preventDefault()
  const form = event.target

  const data = {
    id: form.restaurantId.value,
    name: form.name.value,
    imagelink: form.imagelink.value
  }

  const url = `http://localhost:8001/restaurants/${data.id}` 

  const response = await fetch(url, { 
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    window.location = "/restaurants"
  }
}