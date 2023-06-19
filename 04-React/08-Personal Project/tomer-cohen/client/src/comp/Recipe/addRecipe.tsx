import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { User } from "../../pages/Register";
import { useRef } from "react";


export interface Recipe {
    title: string;
    image: string
    description: string;
    author: string;
  }

  function AddRecipe({ user }: { user: User | undefined }) {
    const formRef = useRef<HTMLFormElement>(null);
  
    async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault();
      
      const form = formRef.current;
      if (!form) return;
  
      const title = form.title.valueOf;
      const image= form.image.value;
      const description = form.description.value;
      const author = user?.userName || ""; 
      console.log(title, description, author);
      const { data } = await axios.post("/api/recipes/add-recipe", {
        title,
        image,
        description,
        author,
      });
      console.log(data);
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
            <div className="user-box">
              <input type="text" name="author" placeholder="" />
              <label>author</label>
            </div>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
  
  export default AddRecipe;
  