import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
import LOButton from "./LOButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

export default class SprintEditBody extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item sm={4}>
            Story/Bug Id{" "}
          </Grid>

          <Grid item sm={6}>
            <TextField
              id="outlined-bare"
              defaultValue=""
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid
            container
            item
            sm={2}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <LOButton lable={<AddIcon />} size={"small"} />
          </Grid>
        </Grid>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                Story Id
              </Grid>
              <Grid item sm={6}>
                <LOButton
                  lable={<DeleteIcon />}
                  size={"small"}
                  color={"secondary"}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                Bug Id
              </Grid>
              <Grid item sm={6}>
                <LOButton
                  lable={<DeleteIcon />}
                  size={"small"}
                  color={"secondary"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
        <Grid container spacing={2}>
          <Grid item sm={8}></Grid>
          <Grid item sm={2}>
            <LOButton lable={"Save"} size={"small"} />
          </Grid>
          <Grid item sm={2}>
            <LOButton lable={"Cancel"} size={"small"} color={"secondary"} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
