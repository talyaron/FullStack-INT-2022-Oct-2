import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./comp/NavBar/NavBar";
import PopUp from "./comp/popUp/PopupAddRecipe";
import RecipeProps from "./comp/Recipe/Recipe";
import Button from "@mui/material/Button";

export interface Recipe {
  title: string;
  description: string;
  image:string;
  createdBy: string; // Change 'author' to 'createdBy'
  _id: string;
}

export interface User {
  _id:string;
  userName: string;
  password: string;
  email: string;
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    getRecipes();
    getUser();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await axios.get("/api/recipes/get-recipes");
      const recipeDB = response.data.recipesDB;
      if (Array.isArray(recipeDB)) {
        setRecipes(recipeDB);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get("/api/users/get-user"); // Adjust the API endpoint according to your server setup
      const userDB = response.data.user;
      setUser(userDB);
    } catch (error) {
      console.error(error);
    }
  };



  const togglePopUp = () => {
    setIsPopUpOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavBar />
      <div className="addRecipe">
        <Button onClick={togglePopUp} variant="contained" className="addRecipe__openButton">
          {isPopUpOpen ? "Close" : "Add Recipe"}
        </Button>
        {isPopUpOpen && <PopUp setRecipes={setRecipes} />} 
      </div>
      <div className="recipes">
        <div className="recipes-container">
          {recipes && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeProps
                key={recipe._id}
                recipe={recipe}
                setRecipe={setSelectedRecipe}
                recipes={recipes}
                user={user}
              />
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
