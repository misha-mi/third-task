import "./logo.sass";
import Image from "next/image";
import logo from "@/public/Logo.png";

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