export default async function getSubscriptions() {
  const response = await fetch(`http://localhost:3000/api/products`);
  return response.json();
}