import "./dropdown.sass";
import Link from "next/link";
import Image from "next/image";
import logout from "@/public/logout.svg";
import setting from "@/public/setting.svg";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown__wrapper">
        <li>
          <Link href="/" className="dropdown__item">
            <Image
              src={setting}
              alt={"setting"}
            />
            Settings
          </Link>
        </li>
        <li>
          <Link href="/" className="dropdown__item">
            <Image
              src={logout}
              alt={"logout"}
            />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown;