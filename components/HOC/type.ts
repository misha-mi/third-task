import { ReactElement } from "react";

export interface IPrivateRoute { children: ReactElement, destinationPath: string }

export interface IReduxProvider { children: ReactElement }