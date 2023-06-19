import { link } from "fs";
import RecipeModel from "./RecipeModel";

export const getRecipes = async (req: any, res: any) => {
  try {
    const recipesDB = await RecipeModel.find({});
    res.status(200).send({ ok: true, recipesDB });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error });
  }
};

export const addRecipe = async (req: any, res: any) => {
  try {
    const { title, image, description, author } = req.body;
    console.log(title, description, author);

    const recipeDB = await RecipeModel.create({ title,image,description, author });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
  }
};

export const deleteRecipe = async (req: any, res: any) => {
  try {
    const { _id } = req.body;
    await RecipeModel.findByIdAndDelete(_id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
  }
};

export const getRecipe = async (req: any, res: any) => {
  try {
    const { recipeId } = req.body;
    const recipe = await RecipeModel.findById(recipeId);

    res.send({ ok: true, recipe });
  } catch (error) {
    console.error(error);
  }
};
