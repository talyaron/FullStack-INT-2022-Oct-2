

type Props = {};

function Search({}: Props) {
  return (
    <form>
      <label htmlFor="search">
        <input type="text" id="search" placeholder="Search a product..." />
      </label>
    </form>
  );
}

export default Search;
