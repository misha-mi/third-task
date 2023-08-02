
import Nav from "../nav/nav";
import "./header.sass";
import Logo from "@/components/ui/logo/logo";


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Nav />
        </div>
      </div>
    </div>
  )
}

export default Header;