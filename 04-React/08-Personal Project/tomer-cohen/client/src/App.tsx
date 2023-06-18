// import { useState } from 'react'
import axios from "axios";
import "./App.scss";
// import { useNavigate } from "react-router-dom";
import NavBar from "./comp/NavBar/NavBar";
import AddRecipe from "./comp/Recipe/addRecipe";
import { useEffect, useState } from "react";
import PopUp from "./comp/popUp/PopupAddRecipe";
export interface Recipe {
  title: string;
  description: string;
  author: string;
  _id:string
}

export interface User {
  username: string;
  password: string;
  email: string;
}
function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    async function getRecipes() {
      try {
        const { data } = await axios.get("/api/recipes/get-recipes");
        const { recipes } = data;
        if (!recipes) throw new Error("No recipes found");
        setRecipes(recipes);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipes();
  }, []);
  
  const[PopOpen,setPopOpen] =useState(false)
  const handelPopUp =()=>{
    setPopOpen((PopOpen)=>!PopOpen);
  }
  return (
    <><>
      <NavBar />
      <button onClick={handelPopUp}>{PopOpen ? "Close" : "Add Recipe"}</button>
      {PopOpen ? <PopUp /> : null}</>
      <div>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p>{recipe.author}</p>
        </div>
      ))}
    </div>
      </>
  );
}

export default App;
