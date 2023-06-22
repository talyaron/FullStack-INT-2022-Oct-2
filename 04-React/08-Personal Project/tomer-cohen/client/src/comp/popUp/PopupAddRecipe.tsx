import { FC } from "react";
import AddRecipe from "../Recipe/addRecipe";
import { Recipe } from "../../App";

type SetRecipesFunction = (recipes: Recipe[]) => void;

interface Prop2 {
  setRecipes?: SetRecipesFunction;
}

const PopUp: FC<Prop2> = ({ setRecipes = () => {} }) => {
  return (
    <div className="popUpRecipe">
      <button className="popupButton">
        <AddRecipe setRecipes={setRecipes} />
      </button>
    </div>
  );
};

export default PopUp;
