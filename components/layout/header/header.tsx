
import Nav from "../nav/nav";
import "./header.sass";
import Logo from "@/components/ui/logo/logo";


const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  )
}

export default Header;