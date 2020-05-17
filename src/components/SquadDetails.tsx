import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LOButton from "./LOButton";
import { Grid } from "@material-ui/core";
import { ModalSquadSprint } from "./ModalSquadSprint";
import MemberModalBody from "./MemberModalBody";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SquadDetails() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h5" component="h2">
              First Squad
            </Typography>
          </Grid>
          <Grid item md={3}>
            <ModalSquadSprint
              lable="Edit"
              size="medium"
              body02={<MemberModalBody />}
            />
          </Grid>
          <Grid item md={3}>
            <LOButton lable={"Delete"} size={"medium"} color={"secondary"} />
          </Grid>
        </Grid>
        <Typography className={classes.pos} color="textSecondary">
          Member 1
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Member 2
        </Typography>
      </CardContent>
    </Card>
  );
}
