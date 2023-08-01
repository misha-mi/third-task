import "./header.sass";
import Logo from "@/components/ui/logo/logo";


const Header = () => {
  return (
    <div>
      <Logo />
      <div className="header__wrapper">
        <a className="header__my-subscriptions" href="/subscriptions">My subscriptions</a>
        <div className="header__user">Alex</div>
      </div>
    </div>
  )
}

export default Header;