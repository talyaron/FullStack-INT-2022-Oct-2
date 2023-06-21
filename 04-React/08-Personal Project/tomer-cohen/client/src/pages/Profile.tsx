import axios from 'axios';
import NavBar from '../comp/NavBar/NavBar'
import '../style/ProfileStyle.scss'
import { useEffect, useState } from 'react';
import { Recipe } from '../App';
import { User } from './Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationDialog from "../comp/popUp/popupDelete";

function Profile() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [user, setuser] = useState<User[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    getRecipes();
    getUserInfo();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes/get-Recipes-Of-User');
      const recipeDB = response.data.recipes;
      if (Array.isArray(recipeDB)) {
        setRecipes(recipeDB);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get('/api/users/get-user-by-id');
      const userDB = response.data.user;
      setuser([userDB]); // Wrap the user object in an array
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecipe = async (recipeId: any) => {
    setSelectedRecipeId(recipeId);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (selectedRecipeId) {
        await axios.delete('/api/recipes/delete-recipe', { data: { _id: selectedRecipeId } });
        getRecipes();
        setSelectedRecipeId(null);
        console.log('Recipe deleted successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setSelectedRecipeId(null);
  };

  const handleUpdateInfo = async () => {
    try {
      const userId = user[0]?._id; // Assuming there is only one user in the array

      if (!userId) {
        console.error('User ID not found');
        return;
      }

      const { data } = await axios.put('/api/users/update-info', {
        username: newUsername,
        email: newEmail,
        userId: userId
      });

      // Update the user state with the updated user data
      setuser([data.user]);

      // Reset the input fields
      setNewUsername('');
      setNewEmail('');

      console.log('User information updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="recipes-container">
        <h2>Your info</h2>
        <div className="recipe-grid">
          {user.map((user) => (
            <div key={user._id} className="recipe-item">
              <h3>Email: {user.email}</h3>
              <h2>User Name: {user.userName}</h2>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="New Username"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="New Email"
              />
              <button onClick={handleUpdateInfo}>Update Info</button>
            </div>
          ))}
        </div>
      </div>
      <div className="mainPagePost">
        <h2>Your Recipes</h2>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="recipe-item">
              <img src={recipe.image} alt={recipe.title} />
              <h3>titel: {recipe.title}</h3>
              <button
                className={`main__container__deletePost ${
                  selectedRecipeId === recipe._id ? 'selected' : ''
                }`}
                onClick={() => handleDeleteRecipe(recipe._id)}
              >
                <FontAwesomeIcon icon={faTrash} className="icon" />
              </button>
            </div>
          ))}
        </div>
        {showConfirmation && (
          <ConfirmationDialog
            message={`Are you sure you want to delete ${
              `recipe with ID: ${selectedRecipeId}`
            }?`}
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </div>
    </>
  );
}

export default Profile;
