"use client";
import "./form.sass";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../input/input";
import Button from "../button/button";


interface IInputs {
  Username?: string,
  Password?: string,
  Email?: string,
  CurrentPassword?: string,
  NewPassword?: string,
}

interface IForm {
  inputs: IInputs,
  buttonText: string,
}

const Form = ({ inputs, buttonText }: IForm) => {

  const { register, handleSubmit, formState: { errors } } = useForm<IInputs>({
    defaultValues: inputs
  });

  const onSubmit: SubmitHandler<{}> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {Object.keys(inputs).map((input, id) => (
        <div key={id}>
          <Input placeholder={input} register={register} required={input + " is required"} status={errors[input as keyof IInputs]?.message} />
          <p className="form__error">{errors[input as keyof IInputs]?.message}</p>
        </div>
      ))}
      <Button text={buttonText} width="w200px" />
    </form>
  )
}

export default Form;