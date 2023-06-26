export interface IFormField {
  label: string;
  property: string;
  type: string;
}

export const LOGIN_FIELDS: IFormField[] = [
  {
    label: "Email",
    property: "email",
    type: "",
  },
  {
    label: "Password",
    property: "password",
    type: "password",
  },
];
