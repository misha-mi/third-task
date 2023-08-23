import "./products.sass";
import { TSubscription } from "./type"

import Link from "next/link";
import Button from "@/components/ui/button/button";

import getSubscriptions from "@/services/getSubscriptions";

import axios from "axios";
import { cookies } from 'next/headers';


const Products = async () => {
  const subscriptions: TSubscription[] = await getSubscriptions();

  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  let auth = false;

  await axios({
    method: "GET",
    url: "http://localhost:3000/api/me",
    params: { token: token?.value || "" }
  }).then(res => {
    auth = !res.data.message;
  });

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
            <li className="products__li">
              <span className="icon-done products__mark"></span>
              {item.sitesCount + " license"}
            </li>
            <li className="products__li">
              <span className="icon-done products__mark"></span>
              Special introductory pricing
            </li>
            <li className="products__li">
              <span className="icon-done products__mark"></span>
              Unlimited Pages and Keywords
            </li>
            <li className="products__li">
              <span className="icon-done products__mark"></span>
              Billed annually
            </li>
          </ul>

          <Link
            href={`/authorization${auth ? "" : "?destinationPath=/authorization"}/${item.id}`}
            className="products__button"
          >
            <Button text="Get Gscore" theme="color100" width="w100" height="h72px" alternativeFontColor={id !== 1} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products;