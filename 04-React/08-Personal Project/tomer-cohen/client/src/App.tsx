import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./comp/NavBar/NavBar";
import PopUp from "./comp/popUp/PopupAddRecipe";
import RecipeProps from "./comp/Recipe/Recipe";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface Recipe {
  title: string;
  description: string;
  image: string;
  userId: string;
  _id: string;
  author: string;
}

export interface User {
  _id: string;
  userName: string;
  password: string;
  email: string;
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecipes();
    getUser();
  }, []);

  const getRecipes = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/recipes/get-recipes");
      const recipeDB = response.data.recipesDB;
      if (Array.isArray(recipeDB)) {
        setRecipes(recipeDB);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/users/get-user");
      const userDB = response.data.user;
      setUser(userDB);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const togglePopUp = () => {
    setIsPopUpOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavBar />
      <div className="addRecipe">
        <Button
          onClick={togglePopUp}
          variant="contained"
          className="addRecipe__openButton"
        >
          {isPopUpOpen ? "Close" : "Add Recipe"}
        </Button>
        {isPopUpOpen && <PopUp setRecipes={setRecipes} />}
      </div>
      <div className="recipes">
        <div className="recipes-container">
          {isLoading ? (
            <CircularProgress />
          ) : recipes && recipes.length > 0 ? (
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
