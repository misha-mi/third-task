import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import Link from "next/link";

export default function Authorization() {
  return (
    <>
      <h2 className="authorization__title">Create account</h2>
      <p className="authorization__need">
        You need to enter your name and email. We will send you a temporary password by email
      </p>

      <form action="#" className="authorization__form">
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <div className="authorization__submit">
          <Button text="Send password" width="w200px" />
        </div>
      </form>

      <p className="authorization__have">
        Have an account?
        <Link
          href={"/authorization/log-in"}
          className="authorization__next"
        >
          Go to the next step
        </Link>
      </p>
    </>
  )
}