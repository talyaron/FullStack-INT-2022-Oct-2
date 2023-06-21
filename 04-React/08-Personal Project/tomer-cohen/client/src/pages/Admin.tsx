import React, { useEffect, useState, } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../style/AdminStyle.scss";
import { Recipe, User } from "../App";
import ConfirmationDialog from "../comp/popUp/popupDelete";
import NavBar from "../comp/NavBar/NavBar";


function Admin() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(
    null
  );
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  // useEffect(() => {
  //   const checkAdminAccess = async () => {
  //     try {
  //       const response = await axios.get('/api/admin');
  //       console.log(response.data);
  //       // Continue with rendering the admin page
  //     } catch (error) {
  //       console.error(error);
  //       // Redirect to another page or show an error message
  //       window.location.href = '/access-denied';
  //     }
  //   };

  //   checkAdminAccess();
  // }, []);

  useEffect(() => {
    getUsers();
    getRecipes();
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

  const handleDeleteUser = async (userId:any) => {
    setSelectedUserId(userId);
    setShowConfirmation(true);
  };

  const handleDeleteRecipe = async (recipeId:any) => {
    setSelectedRecipeId(recipeId);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (selectedUserId) {
        await axios.delete(`/api/users/delete-user`, { data: { _id: selectedUserId } });
        getUsers();
        setSelectedUserId(null);
        console.log("User deleted successfully");
      } else if (selectedRecipeId) {
        await axios.delete(`/api/recipes/delete-recipe`, { data: { _id: selectedRecipeId } });
        getRecipes();
        setSelectedRecipeId(null);
        console.log("Recipe deleted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setSelectedUserId(null);
    setSelectedRecipeId(null);
  };

  return (
    <>
    <NavBar />
    <div className="admin">
      <h1 className="admin-title">Admin Page</h1>
      <div className="admin-section">
        <div className="section users">
          <h2 className="section-title">Users:</h2>
          {users && users.length > 0 ? (
            <ul className="list">
              {users.map((user) => (
                <li key={user._id} className="item">
                  <div className="details">
                    <p>Username: {user.userName}</p>
                    <p>Email: {user.email}</p>
                  </div>
                  <div className="actions">
                    <button
                      className={`button ${
                        selectedUserId === user._id ? "selected" : ""
                      }`}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                       <FontAwesomeIcon icon={faTrash} className="icon" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found.</p>
          )}
        </div>
        <div className="section recipess">
          <h2 className="section-title">Recipes:</h2>
          {recipes && recipes.length > 0 ? (
            <ul className="list">
              {recipes.map((recipe) => (
                <li key={recipe._id} className="item">
                  <div className="details">
                    <p>Title: {recipe.title}</p>
                    <p>Description: {recipe.description}</p>
                  </div>
                  <div className="actions">
                    <button
                      className={`button ${
                        selectedRecipeId === recipe._id ? "selected" : ""
                      }`}
                      onClick={() => handleDeleteRecipe(recipe._id)}
                    >
                       <FontAwesomeIcon icon={faTrash} className="icon" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
      {showConfirmation && (
        <ConfirmationDialog
          message={`Are you sure you want to delete ${
            selectedUserId ? `user with ID: ${selectedUserId}` : `recipe with ID: ${selectedRecipeId}`
          }?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
    </>
  );}

export default Admin;
