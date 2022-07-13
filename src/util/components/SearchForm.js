import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const SearchForm = props => {
  const navigate = useNavigate();

  const Search = (event) => {
    if (event.key === "Enter") {
      const searchTerm = event.target.value;
      navigate(`/photos/${searchTerm}`, { replace: true });
    }
  };

  return (
    <TextField
      className="w-full m-4 bg-white rounded"
      id="outlined-basic"
      label="Searching"
      variant="outlined"
      onKeyDown={Search}
    />
  );
};
export default SearchForm;
