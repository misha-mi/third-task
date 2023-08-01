import Link from "next/link";
import chevron from "@/public/Chevron.svg";
import Image from "next/image";
import "./header.sass";
import Logo from "@/components/ui/logo/logo";


const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header__wrapper">
        <Link className="header__my-subscriptions" href="/">My subscriptions</Link>
        <div className="header__user">
          Alex
          <Image
            className="header__chevron"
            src={chevron}
            alt={'chevron'}
          />
        </div>
      </div>
    </div>
  )
}

export default Header;