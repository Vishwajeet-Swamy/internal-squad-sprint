import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function FilterSearch() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={topSquadSearches}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search by Squad" variant="outlined" />
      )}
    />
  );
}

const topSquadSearches = [
  { title: "The First Squad" },
  { title: "The Second Squad" },
  { title: "The Third Squad" },
  { title: "The Fourth Squad" },
  { title: "The Fifth Squad" },
  { title: "The Sixth Squad" },
  { title: "The Seventh Squad" },
  { title: "The Eighth Squad" },
];
