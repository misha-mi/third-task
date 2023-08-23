import "./header.sass";
import Logo from "@/components/ui/logo/logo";

import Link from "next/link";
import Nav from "../nav/nav";
import ReduxProvider from "@/components/HOC/provider";


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link href={"/"}>
            <Logo />
          </Link>

          <ReduxProvider>
            <Nav />
          </ReduxProvider>
        </div>
      </div>
    </div>
  )
}

export default Header;