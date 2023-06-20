import axios from "axios";
import "../style/AdminStyle.scss";
import { useEffect, useState } from "react";
import { Recipe, User } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Admin() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    getRecipes();
    getUsers();
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

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users/get-users");
      const usersDB = response.data.usersDB;
      if (Array.isArray(usersDB)) {
        setUsers(usersDB);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecipe = async (recipeId: string) => {
    try {
      // Show confirmation message or perform any other desired action
      setSelectedRecipeId(recipeId);
      // Delete the recipe
      await axios.delete(`/api/recipes/delete-recipe?id=${recipeId}`);
      getRecipes(); // Refresh the recipes list after deletion
      // Clear the selection
      setSelectedRecipeId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      // Show confirmation message or perform any other desired action
      setSelectedUserId(userId);
      // Delete the user
      await axios.delete(`/api/users/delete-user/${userId}`);
      getUsers(); // Refresh the users list after deletion
      // Clear the selection
      setSelectedUserId(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="admin">
        <div className="recipes">
          <h2>Recipes:</h2>
          {recipes && recipes.length > 0 ? (
            <ul className="recipe-list">
              {recipes.map((recipe) => (
                <li key={recipe._id} className="recipe-item">
                  <div className="recipe-details">
                    <p>Title: {recipe.title}</p>
                    <p>Description: {recipe.description}</p>
                  </div>
                  <div className="recipe-actions">
                    <button
                      className={`trash-button ${
                        selectedRecipeId === recipe._id ? "selected" : ""
                      }`}
                      onClick={() => handleDeleteRecipe(recipe._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
        <div className="users">
          <h2>Users:</h2>
          {users && users.length > 0 ? (
            <ul className="user-list">
              {users.map((user) => (
                <li key={user._id} className="user-item">
                  <div className="user-details">
                    <p>Username: {user.userName}</p>
                    <p>Email: {user.email}</p>
                  </div>
                  <div className="user-actions">
                    <button
                      className={`trash-button ${
                        selectedUserId === user._id ? "selected" : ""
                      }`}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
