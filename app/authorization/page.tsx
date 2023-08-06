import Link from "next/link";
import Form from "@/components/ui/form/form";
import Title from "@/components/ui/title/title";

export default function Authorization() {
  return (
    <>
      <div className="authorization__title">
        <Title titleText="Create account" />
      </div>
      <p className="authorization__need">
        You need to enter your name and email. We will send you a temporary password by email
      </p>

      <div className="authorization__form">
        <Form inputs={{
          "Username": "", "Email": "", "Password": ""
        }} buttonText="Send password" />
      </div>

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