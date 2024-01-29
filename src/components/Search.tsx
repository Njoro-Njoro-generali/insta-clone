import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="search-bar">
      <form action="POST" className="search-form">
        <input type="text" name="search" id="search" placeholder="Search" />
        <CiSearch className="icon-search-bar" />
      </form>
    </div>
  );
};

export default Search;
