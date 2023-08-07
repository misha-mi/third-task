export interface IInputs {
  Username?: string,
  Password?: string,
  Email?: string,
  CurrentPassword?: string,
  NewPassword?: string,
}

export interface IForm {
  inputs: IInputs,
  buttonText: string,
}