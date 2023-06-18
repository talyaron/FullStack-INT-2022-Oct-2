import axios from "axios";


export interface Recipe {
    title: string;
    description: string;
    author: string;
  }


function AddRecipe() {
    async function handleSubmit(ev: any) {
      ev.preventDefault();
      console.log(ev.target);
      const title = ev.target.title.value;
      const description = ev.target.description.value;
      const author = ev.target.author.value;
  
      console.log(title, description, author);
      const { data } = await axios.post("/api/recipes/add-recipe", {
        title,
        description,
        author,
      });
      console.log(data);
    }
  
    return (
      <>
        <div className="login-box">
          <h2>recipe</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input type="text" name="title" placeholder="" />
              <label>title</label>
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
  