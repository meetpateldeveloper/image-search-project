import './SearchBar.css'
import {useState} from 'react';

function SearchBar({ onSubmit }) {
    const[state,setState] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  const onInputChange = (event) =>{
    setState(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input type="Text" value={state} name="userInput" onChange={onInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
