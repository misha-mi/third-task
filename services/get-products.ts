export default async function getProducts() {
  const response = await fetch(`http://localhost:3000/api/get-products`);
  return response.json();
}