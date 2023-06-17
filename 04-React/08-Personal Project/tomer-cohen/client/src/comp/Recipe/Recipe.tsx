import { FC, SetStateAction } from "react";
// import { useParams } from 'react-router-dom';
import { Recipe, User } from "../../App";

interface RecipeProps {
  setRecipe: SetStateAction<any>;
  recipes: Recipe[];
  recipe: Recipe | undefined;
  user:User | undefined;
}
// interface UserProps{
//     setUser: SetStateAction<any>;
//     users: User[];
//     user: User;
// }

const recipe: FC<RecipeProps> = ({ recipe,user }) => {
  // const { recipeId } = useParams<{ recipeId: string }>();

  return (
    <div className="recipe-container">
        <p>{user?.username}</p>
      <h1>{recipe?.title}</h1>
      <p>{recipe?.description}</p>
    </div>
  );
};

export default recipe;