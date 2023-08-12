export interface IInputs {
  username?: string,
  password?: string,
  email?: string,
  currentPassword?: string,
  newPassword?: string,
}

export interface IForm {
  inputs: IInputs,
  buttonText: string,
}