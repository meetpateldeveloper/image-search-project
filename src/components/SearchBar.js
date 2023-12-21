import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [state, setState] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  const onInputChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="search-bar">
      <h2>Image Search Application</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term and then hit "Enter"</label>
        <input
          type="Text"
          value={state}
          name="userInput"
          onChange={onInputChange}
          placeholder="Car"
        />
      </form>
    </div>
  );
}

export default SearchBar;
