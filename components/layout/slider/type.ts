import { ReactElement } from "react";

export interface ISlider {
  children: ReactElement[];
  loading: boolean
};

export type THandlerSwitchingSlider = (step: number) => void;