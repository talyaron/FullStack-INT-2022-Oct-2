import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { User } from "../../pages/Register";
import { FC, useRef, useState } from "react";
import recipe from "./Recipe";


interface Prop{
  setRecipes?: Function;
}

export interface Recipe {
    title: string;
    image: string
    description: string;
    author: string;
  }


  const AddRecipe: FC<Prop> =({setRecipes}) =>{
    const formRef = useRef<HTMLFormElement>(null);

    
    async function handleSubmit(ev: any) {
      ev.preventDefault();
      const form = ev.target;
      if (!form) return;
  
      const title = form.title.value;
      const image= form.image.value;
      const description = form.description.value;
      console.log(title, description, );
      const { data } = await axios.post("/api/recipes/add-recipe", {
        title,
        image,
        description,
      });
      console.log(data);
      if(!setRecipes){
        throw new Error("no setRecipes");
        
      }
      setRecipes((recipes: any)=>[...recipes,{title,image,description}])
    
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
  