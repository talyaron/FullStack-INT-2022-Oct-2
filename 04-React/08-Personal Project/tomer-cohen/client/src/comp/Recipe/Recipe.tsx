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

const recipe: FC<RecipeProps> = ({ recipe, user }) => {
  return (
    <div className="recipe-container">
      {user && <p>{user.userName}</p>}
      <h1>{recipe?.title}</h1>
      <img src={recipe?.image} alt="" />
      <p>{recipe?.description}</p>
    </div>
  );
};

export default recipe;
