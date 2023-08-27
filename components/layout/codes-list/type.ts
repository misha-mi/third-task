export interface ICodeList { isUpgrade: boolean };

export type THandlerCheckCode = (codeId: number) => void;

export type TMarkedCodes = number[];