
import "./nav.sass";
import Link from "next/link";
import Image from "next/image";
import chevron from "@/public/Chevron.svg";

import Dropdown from "@/components/ui/dropdown/dropdown";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__my-subscriptions" href="/">My subscriptions</Link>
      <div className="nav__user">
        Alex
        <Image
          className="nav__chevron"
          src={chevron}
          alt={'chevron'}
        />
      </div>
      <div className="nav__dropdown">
        <Dropdown />
      </div>
    </div>
  )
}

export default Nav;
