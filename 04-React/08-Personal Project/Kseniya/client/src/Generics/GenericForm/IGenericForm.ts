import { IFormField } from "../../consts/loginFields"

export interface IGenericForm {
    formFields : IFormField[]
    buttonTitle : string
    buttonFunc : any
}