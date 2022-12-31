const SearchBar = (props) => {

  const handleChange = (e) => {
    props.changeSearch(e.target.value)
  }

  return ( 
    <input 
      type="text" name="search" id="searchBar"
      placeholder="Search Contacts"
      onChange={handleChange}
    />
  );
}

export default SearchBar;