"use client"

import { IButton } from "./type";
import "./button.sass";

import { useState } from "react";


const Button = ({ text, theme = "bg_primary1", width = "w120px", shadow = false, alternativeFontColor = false }: IButton) => {

  const [disabled, setDisabled] = useState<boolean>(false);

  const buttonClass = `button + button_${theme} + button_${width}` + (alternativeFontColor ? " button_font_color800" : "");

  return (
    <div className="button_shadow">
      <button
        className={buttonClass}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  )
}

export default Button;