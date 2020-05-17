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
import SprintEditBody from "./SprintEditBody";
import NewSprint from "./NewSprint";

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

export default function SprintDetail() {
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
              body02={<SprintEditBody />}
            />
          </Grid>
          <Grid item md={3}>
            <ModalSquadSprint
              lable="New Sprint"
              size="medium"
              body01={<NewSprint />}
            />
          </Grid>
        </Grid>
        <br />
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" component="h2">
              First Sprint
            </Typography>
            <br />
            <Typography variant="body2" component="p" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              porttitor magna. Ut tristique magna et justo lobortis hendrerit.
              Mauris euismod bibendum dignissim. Proin interdum ante eu odio
              dapibus, ac rhoncus justo ultricies.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" component="h2">
              Second Sprint
            </Typography>
            <br />
            <Typography variant="body2" component="p" align="center">
              Aliquam faucibus nisi lacinia quam aliquet laoreet. Mauris nec
              consequat odio. Nam eros tellus, sollicitudin ut massa at, laoreet
              condimentum nisi.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
