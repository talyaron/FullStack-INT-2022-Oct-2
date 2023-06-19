import express from "express";
const router = express.Router();
import {
  getRecipe,
  addRecipe,
  deleteRecipe,
  getRecipes,
} from "./RecipeControle";

router
  .get("/get-recipes", getRecipes)
  .post("/add-recipe", addRecipe)
  .get("/get-recipe", getRecipe)
  .delete("/delete-recipe", deleteRecipe);

export default router;
