import { ReactElement } from "react";

export interface ISlider {
  children: ReactElement[];
}

export type THandlerSwitchingSlider = (step: number) => void

export type THandlerSwipe = (startX: number, startY: number) => void

export type THandlerTouchStart = (e: { touches: { clientX: number; clientY: number; }[]; }) => void