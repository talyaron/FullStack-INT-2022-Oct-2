import  {model , Schema } from "mongoose";

export interface IImage {
    name: string,
    src: string,
    category: string
}

export const ImageSchema = new Schema({
    name:String,
    src:String,
    category:String
})

const ImageModel = model("images" , ImageSchema)

export default ImageModel