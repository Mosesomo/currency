const SearchBar = () => {
    return (
      <div className="sticky top-0 bg-white z-10 shadow px-4 py-2">
        <input
          type="text"
          value=""
          onChange=""
          placeholder="Search currencies..."
          className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchBar;
  