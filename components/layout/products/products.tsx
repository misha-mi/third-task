import "./products.sass";
import CheckSVG from "@/lib/svg/check-svg";
import { TProduct } from "@/types";

import Link from "next/link";
import Button from "@/components/ui/button/button";

import getProducts from "@/services/get-products";
import getUserData from "@/services/get-user-data";

import { cookies } from 'next/headers';


const Products = async () => {
  const subscriptions: TProduct[] = await getProducts();

  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  let auth = false;

  await getUserData(token?.value || "")
    .then(res => {
      auth = !res.data.message;
    });

  return (
    <div className="products">
      {subscriptions.map((item: TProduct, id: number) => (
        <div className={"products__item" + (id === 1 ? " products_primary" : "")} key={item.id}>

          <div className="products__price">{"$" + item.prices[0].price}</div>
          <h2 className="products__name">{item.name}</h2>

          <p className="products__description">
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </p>

          <div className="products__divider"></div>

          <ul className="products__ul">
            <li className="products__li">
              <div className="products__mark">
                <CheckSVG />
              </div>
              {item.sitesCount + " license"}
            </li>
            <li className="products__li">
              <div className="products__mark">
                <CheckSVG />
              </div>
              Special introductory pricing
            </li>
            <li className="products__li">
              <div className="products__mark">
                <CheckSVG />
              </div>
              Unlimited Pages and Keywords
            </li>
            <li className="products__li">
              <div className="products__mark">
                <CheckSVG />
              </div>
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