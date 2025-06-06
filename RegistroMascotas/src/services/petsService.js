const BASE_URL = 'https://retoolapi.dev/IO7y9L/mascotas';

export async function getAllPets() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Error al obtener mascotas');
  return res.json();
}

export async function getPetById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Mascota no encontrada');
  return res.json();
}

export async function createPet(data) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al crear mascota');
  return res.json();
}

export async function updatePet(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al actualizar mascota');
  return res.json();
}

export async function deletePet(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar mascota');
  return res.json();
}
