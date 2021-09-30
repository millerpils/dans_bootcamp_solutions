async function deleteRestaurant(btn) { 
  const id = btn.getAttribute("data-id")
  const url = `http://localhost:8001/restaurants/${id}` 
  const response = await fetch(url, { method: "DELETE" })

  if (response.ok) {
    window.location.reload()
  }
}