import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default class AddModalBodySquad extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item sm={4}>
            Squad Name{" "}
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-bare"
              defaultValue=""
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </div>
    );
  }
}
