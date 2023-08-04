"use client"

import { IButton } from "./type";
import "./button.sass";

import { useState } from "react";
import Spinner from "../spinner/spinner";


const Button = ({ text, theme = "primary1", width = "w120px", shadow = false, alternativeFontColor = false }: IButton) => {

  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const buttonClass = `button + button_bg_${theme} + button_${width}` + (alternativeFontColor ? " button_font_color800" : "");

  return (
    <div className={`button_shadow button_${width}`}>
      <button
        className={buttonClass}
        disabled={disabled}
      >
        {
          loading ? (
            <Spinner color={theme} />
          ) : (
            text
          )
        }
      </button>
    </div>
  )
}

export default Button;