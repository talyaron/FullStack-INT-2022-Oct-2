import { link } from "fs";
import RecipeModel from "./RecipeModel";
import jwt from "jwt-simple"
import UserModel from "../Users/UserModel";
const secret = process.env.JWT_SECRET;


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
    const { title, image, description } = req.body;
    const { user } = req.cookies;
    if (!secret) throw new Error("No secret");
    const decoded = jwt.decode(user, secret);
    const userId = decoded.userId;

    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("User not found");

    const recipeDB = await RecipeModel.create({
      user: userId,
      title,
      image,
      description,
      author: userDB.userName, // Set the author field to the username
    });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
  }
};

export const deleteRecipe = async (req: any, res: any) => {
  try {
    const { _id } = req.body;
    await RecipeModel.findByIdAndDelete(_id);
    const recipes = await RecipeModel.find({});
    res.status(201).send({ ok: true, recipes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
export const getRecipesOfUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    if (!secret) throw new Error("No secret");

    const decoded = jwt.decode(user, secret);
    const userId = decoded.userId;

    const recipes = await RecipeModel.find({ user: userId });
    res.send({ recipes });
  } catch (error: any) {
    res.status(500).send(error);
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
