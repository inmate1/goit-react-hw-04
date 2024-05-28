import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      if (value === "") {
        console.log("object");
    }
      onSubmit(value);
      setValue("");
  };

  const handleChange = (evt) => {
    // const form = evt.target;
    setValue(evt.target.value.trim());
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button type='submit'> Search </button>
      </form>
    </header>
  );
};

export default SearchBar;
