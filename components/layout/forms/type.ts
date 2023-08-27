export interface IUserForm {
  username: string;
  email: string;
}

export interface ISignUpForm {
  username: string;
  password: string;
  email: string;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}

export interface ILogInForm {
  email: string;
  password: string;
}

export interface IDestinationPath {
  destinationPath: string
}