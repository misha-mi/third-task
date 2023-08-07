import "./logo.sass";
import logo from "@/public/Logo.png";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src={logo}
        alt={'GSCORE'}
        style={{
          width: "100%",
          height: "auto"
        }}
      />
    </div>
  )
}

export default Logo;