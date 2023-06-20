import axios from "axios";
import { FC, useRef } from "react";
import { User } from "../../App";


interface Prop{
  setRecipes?: Function;
}

export interface Recipe {
    title: string;
    image: string
    description: string;
    author: string;
  }

  interface AddRecipeProps {
    setRecipes: (recipes: Recipe[]) => void;
    setUser: (user: User | undefined) => void;
  }
  
  const AddRecipe: FC<AddRecipeProps> = ({ setRecipes, setUser }) => {
    const formRef = useRef<HTMLFormElement>(null);
  
    async function handleSubmit(ev: any) {
      ev.preventDefault();
      const form = ev.target;
      if (!form) return;
  
      const title = form.title.value;
      const image = form.image.value;
      const description = form.description.value;
  
      try {
        await axios.post("/api/recipes/add-recipe", {
          title,
          image,
          description,
        });
  
        // Fetch updated recipes
        const response = await axios.get("/api/recipes/get-recipes");
        const updatedRecipes = response.data.recipesDB;
        setRecipes(updatedRecipes);
  
        // Fetch updated user info
        const userResponse = await axios.get("/api/users/get-user");
        const updatedUser = userResponse.data.user;
        setUser(updatedUser);
      } catch (error) {
        console.error(error);
      }
  
      form.reset();
    }
  
    return (
      <>
        
        <div className="login-box">
          <h2>recipe</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="user-box">
              <input type="text" name="title" placeholder="" />
              <label>title</label>
            </div>
            <div className="user-box">
              <input type="url" name="image" placeholder="" />
              <label>image</label>
            </div>
            <div className="user-box">
              <input type="text" name="description" placeholder="" />
              <label>description</label>
            </div>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
  
  export default AddRecipe;
  