import { TSubscription } from "./type"

async function getSubscriptions() {
  const response = await fetch("https://internship.purrweb.site/api/products");
  return response.json();
}

export default async function Home() {

  const subscriptions: TSubscription[] = await getSubscriptions();

  return (
    <div className="home">
      <div className="container">
        <h1 className="home__title">Get started with Gscore today!</h1>

      </div>
    </div>
  )
}
