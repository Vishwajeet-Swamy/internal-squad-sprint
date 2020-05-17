import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

export interface Props extends WithStyles<typeof styles> {}

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

class OutlinedTextFields extends React.Component<Props, State> {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
  };

  handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      [name]: event.target.value,
    } as Pick<State, keyof State>);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-bare"
          defaultValue="Bare"
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

(OutlinedTextFields as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(OutlinedTextFields);
