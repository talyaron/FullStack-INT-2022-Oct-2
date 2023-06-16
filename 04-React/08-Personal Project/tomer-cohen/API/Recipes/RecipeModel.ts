import mongoose,{Schema} from "mongoose";

interface Recipe{
    title:string;
    description: string;
    author:string;
}

const RecipeSchema = new Schema({
    title: {require: true, type:String},
    description:{require:true, type: String},
    author: {require:true, type:String}
});

const RecipeModel = mongoose.model("recipes", RecipeSchema)

export default RecipeModel;