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
import { Squad } from "../store/squad/types";

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

// import Typography from "@material-ui/core/Typography";

interface IProps {
  squads: Squad[],
  onDeleteSquadClick?: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

const SquadDetails: React.FC<IProps> = ({ squads, onDeleteSquadClick }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return <React.Fragment>
    {squads.map(squad => {
      const deleteSquad = (event: React.MouseEvent<HTMLButtonElement>) =>
        onDeleteSquadClick && onDeleteSquadClick(event, squad.id);
      return (
        <Card className={classes.root} key={squad.id}>
          <CardContent>
            <Grid container>
              <Grid item md={6}>
                <Typography variant="h5" component="h2">
                  {squad.name}
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
                <LOButton lable={"Delete"} size={"medium"} color={"secondary"} clickFunction={deleteSquad} />
              </Grid>
            </Grid>
            {squad.members.map(member =>
              <Typography className={classes.pos} color="textSecondary" key={member.memberId}>
                {member.memberName}
              </Typography>
            )}
          </CardContent>
        </Card>
      )
    })
    }
  </React.Fragment>
}

const defaultProps: IProps = {
  squads: []
}

SquadDetails.defaultProps = defaultProps;

export default SquadDetails;