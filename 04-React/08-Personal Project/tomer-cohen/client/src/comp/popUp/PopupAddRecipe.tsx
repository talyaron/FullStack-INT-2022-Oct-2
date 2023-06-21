import { FC } from "react";
import AddRecipe from "../Recipe/addRecipe";

 interface Prop2{
  setRecipes?: Function ;
}

const PopUp: FC<Prop2>= ({setRecipes}) => {

  return (
    <div className="popUpRecipe">
      <button className="popupButton">
        <AddRecipe  setRecipes={setRecipes}  />
      </button>
    </div>
  );
};

export default PopUp;