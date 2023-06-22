import express from "express";
const router = express.Router();
import { isAdmin } from "../Users/UserMiddelware";
import {
  getRecipe,
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipesOfUser
} from "./RecipeControle";

router
  .get("/get-recipes", getRecipes)
  .post("/add-recipe", addRecipe)
  .get("/get-recipe", getRecipe)
  .delete("/delete-recipe", isAdmin, deleteRecipe)
  .get("/get-Recipes-Of-User",getRecipesOfUser);


export default router;
