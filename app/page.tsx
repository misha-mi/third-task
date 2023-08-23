import "./home.sass";

import Products from "@/components/layout/products/products";
import Link from "next/link";
import Title from "@/components/ui/title/title";

export const dynamicParams = false;

export default async function Home() {

  return (
    <div className="home">
      <div className="container">

        <div className="home__title">
          <Title titleText="Get started with Gscore today!" />
        </div>

        <div className="home__products">
          <Products />
        </div>

        <p className="home__more">Have more than 10 sites?</p>
        <div className="home__contact">
          <Link href={"/"}>Contact us</Link>
        </div>
      </div>
    </div>
  )
}
