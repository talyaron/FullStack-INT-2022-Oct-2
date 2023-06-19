export interface IFormField {
  label: string;
  property: string;
}

export const LOGIN_FIELDS: IFormField[] = [
  {
    label: "Email",
    property: "email",
  },
  {
    label: "Password",
    property: "password",
  },
];
