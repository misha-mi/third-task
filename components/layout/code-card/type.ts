import { TStatus } from "@/types";


export interface ILicenseCard {
  code: string,
  origin: string,
  status: TStatus,
  upgrade: boolean,
  onCheckCode: () => void
  isChecked: boolean
};

export type THandlerActive = (domain: string, code: string) => void;