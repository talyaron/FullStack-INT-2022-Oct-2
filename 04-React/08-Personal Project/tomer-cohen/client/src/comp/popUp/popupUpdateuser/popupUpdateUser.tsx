import axios from "axios";
import { useState } from "react";
import { User } from "../../../App";

const [newUsername, setNewUsername] = useState('');
const [newEmail, setNewEmail] = useState('');
const [user, setuser] = useState<User[]>([]);

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

  return(
    <>
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
  </>
  )