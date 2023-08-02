import "./home.sass";

import Products from "@/components/layout/products/products";
import Link from "next/link";


export default function Home() {
  return (
    <div className="home">
      <div className="container">

        <h1 className="home__title">Get started with Gscore today!</h1>

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
