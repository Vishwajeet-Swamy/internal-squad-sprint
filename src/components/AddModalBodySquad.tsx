import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export interface IProps {
  value: string
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class AddModalBodySquad extends React.Component<IProps> {
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
              value={this.props.value}
              margin="normal"
              variant="outlined"
              onChange={this.props.handleInputChange}
            />
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </div>
    );
  }
}
