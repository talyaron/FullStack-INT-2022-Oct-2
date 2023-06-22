import { FC, SetStateAction } from "react";
import { Recipe, User } from "../../App";

export interface RecipeProps extends UserProps {
  setRecipe: SetStateAction<any>;
  recipes: Recipe[];
  recipe: Recipe | undefined;
}

interface UserProps {
  user: User | undefined;
}

const RecipeProps: FC<RecipeProps> = ({ recipe }) => { // Change the component name from 'recipe' to 'RecipeProps'
  return (
    <div className="recipe-container">
      <p>Created by: {recipe?.author}</p>
      <h1>{recipe?.title}</h1>
      <img src={recipe?.image} alt="" />
      <p>{recipe?.description}</p>
    </div>
  );
};

export default RecipeProps;
