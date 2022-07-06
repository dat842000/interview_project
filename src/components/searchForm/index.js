import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const SearchForm = () => {
  const navigate = useNavigate();

  const Search = (event) => {
    if (event.key === "Enter") {
      const searchTerm = event.target.value;
      navigate(`/photos/${searchTerm}`, { replace: true });
    }
  };

  return (
    <TextField
      className="w-2/6 m-4"
      id="outlined-basic"
      label="Searching"
      variant="outlined"
      onKeyDown={Search}
    />
  );
};
export default SearchForm;
