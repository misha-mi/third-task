import { ReactElement } from "react";

export interface ISlider {
  children: ReactElement[];
}

export type THandlerSwitchingSlider = (step: number) => void