"use client";
import "./form.sass";
import { IInputs, IForm } from "./type";

import Input from "../input/input";
import Button from "../button/button";

import { useForm, SubmitHandler } from "react-hook-form";

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
          <Input
            placeholder={input[0].toUpperCase() + input.slice(1)}
            register={register}
            required={input.replace(/[A-Z]/g, " $&").toLowerCase() + " is required"}
            status={errors[input as keyof IInputs]?.message}
          />
          <p className="form__error">{errors[input as keyof IInputs]?.message}</p>
        </div>
      ))}
      <Button text={buttonText} width="w200px" />
    </form>
  )
}

export default Form;