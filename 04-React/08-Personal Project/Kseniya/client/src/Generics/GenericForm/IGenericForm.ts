import { IFormField } from "../../consts/loginFields";
import { IUserInfo } from "../../pages/SignIn/ISignInInfo";

export interface IGenericForm {
  formFields: IFormField[];
  buttonTitle: string;
  buttonFunc: any;
  fieldInfo: any
  setFieldInfo: React.Dispatch<React.SetStateAction<IUserInfo >>
}
