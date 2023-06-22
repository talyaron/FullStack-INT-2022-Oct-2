import mongoose,{Schema} from "mongoose";
import UserModel from "../Users/UserModel"

interface Recipe{
    title:string;
    image: string
    description: string;
    author:string;
}

const RecipeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users", 
        required: true,
      },
    title: {require: true, type:String},
    image: {require: true, type:String},
    description:{require:true, type: String},
    author: {require:true, type:String}
});

const RecipeModel = mongoose.model("recipes", RecipeSchema)

export default RecipeModel;