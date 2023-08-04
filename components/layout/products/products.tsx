
import "./products.sass";
import Link from "next/link";
import { TSubscription } from "./type"
import Button from "@/components/ui/button/button";

async function getSubscriptions() {
  const response = await fetch("https://internship.purrweb.site/api/products");
  return response.json();
}

const Products = async () => {


  const subscriptions: TSubscription[] = await getSubscriptions();

  return (
    <div className="products">
      {subscriptions.map((item: TSubscription, id: number) => (
        <div className={"products__item" + (id === 1 ? " products_primary" : "")} key={item.id}>

          <div className="products__price">{"$" + item.prices[0].price}</div>
          <h2 className="products__name">{item.name}</h2>

          <p className="products__description">
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </p>

          <div className="products__divider"></div>

          <ul className="products__ul">
            <li className="products__li">{item.name + " license"}</li>
            <li className="products__li">Special introductory pricing</li>
            <li className="products__li">Unlimited Pages and Keywords</li>
            <li className="products__li">Billed annually</li>
          </ul>

          <Link
            href={"/authorization"}
            className="products__button"
          >
            <Button text="Get Gscore" theme="color100" width="w100" alternativeFontColor={id !== 1} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products;