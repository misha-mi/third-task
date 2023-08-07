import "./header.sass";
import Logo from "@/components/ui/logo/logo";

import Link from "next/link";
import Nav from "../nav/nav";



const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link href={"/"}>
            <Logo />
          </Link>

          <Nav />
        </div>
      </div>
    </div>
  )
}

export default Header;