import "./footer.sass";
import TwitterSVG from "@/lib/svg/twitter-svg";
import FacebookSVG from "@/lib/svg/facebook-svg";
import LinkedinSVG from "@/lib/svg/linkedin-svg";

import Logo from "@/components/ui/logo/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__divider"></div>

      <div className="container">

        <Link href={"/"} className="footer__logo">
          <Logo />
        </Link>

        <p className="footer__description">
          Ut enim ad minim veniam quis nostrud exercitation  ea commodo
        </p>

        <div className="footer__divider footer_mt60"></div>

        <div className="footer__bottom">

          <div className="footer__copyright">
            Copyright © 2022 GScore | All Rights Reserved |
            <Link href={"/"}>
              Cookies
            </Link>
            |
            <Link href={"/"}>
              Privacy Policy
            </Link>
          </div>

          <ul className="footer__messages">
            <li>
              <FacebookSVG />
            </li>
            <li>
              <TwitterSVG />
            </li>
            <li>
              <LinkedinSVG />
            </li>
          </ul>

        </div>
      </div>
    </footer>
  )
}

export default Footer;