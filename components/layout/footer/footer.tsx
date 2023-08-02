import Logo from "@/components/ui/logo/logo";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/facebook.svg";
import linkedin from "@/public/in.svg";
import "./footer.sass";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__divider"></div>
      <div className="container">
        <div className="footer__logo">
          <Logo />
        </div>
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
              <Link href={"/"}>
                <Image
                  src={facebook}
                  alt={"facebook"}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={twitter}
                  alt={"twitter"}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={linkedin}
                  alt={"linkedin"}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;