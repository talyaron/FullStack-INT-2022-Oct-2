import { collection, addDoc } from "firebase/firestore";
import './App.css'
import { db } from './config';

function App() {

  const addUser = async (e:any) => {
    try {
      // get details from form
      e.preventDefault();
      const name = e.target.name.value;
      const lastname = e.target.lastname.value;
      const docRef = await addDoc(collection(db, "users"), {
        first: name,
        last: lastname,
        born: 1992
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
        <form onSubmit={addUser}>
          <input type="text" name='name' placeholder='name' />
          <input type="text" name='lastname' placeholder='lastname' />
          <button type='submit'>Add user</button>
        </form>
    </>
  )
}

export default App
