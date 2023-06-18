import AddRecipe from "../Recipe/addRecipe";


const PopUp = () => {
  return (
    <div className="popUpRecipe">
      <button className="popupButton">
        <AddRecipe user={undefined} />
      </button>
    </div>
  );
};

export default PopUp;