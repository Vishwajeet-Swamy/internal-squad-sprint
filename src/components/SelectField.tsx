import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function SelectField() {
  const classes = useStyles();
  const [member, setMember] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMember(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Member</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={member}
          onChange={handleChange}
          label="Member"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Member 1</MenuItem>
          <MenuItem value={2}>Member 2</MenuItem>
          <MenuItem value={3}>Member 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
