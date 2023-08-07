export default async function getSubscriptions() {
  const response = await fetch("https://internship.purrweb.site/api/products");
  return response.json();
}