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
import { Member } from "../store/squad/types";
// import Typography from "@material-ui/core/Typography";


export interface IProps {
  value?: string
  members: Member[]
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSaveButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteButtonClick?: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export default class MemberModalBody extends React.Component<IProps> {
  static defaultProps = { members: [] };
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item sm={4}>
            Member Name{" "}
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
          <Grid
            container
            item
            sm={2}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <LOButton lable={<AddIcon />} size={"small"} clickFunction={this.props.onAddButtonClick} />
          </Grid>
        </Grid>
        <Card variant="outlined">
          <CardContent>
            {this.props.members.map(member => {
              const deleteEvent = (event: React.MouseEvent<HTMLButtonElement>) =>
                this.props.onDeleteButtonClick && this.props.onDeleteButtonClick(event, member.memberId);
              return (<Grid container spacing={1} key={member.memberId}>
                <Grid item sm={6}>
                  {member.memberName}
                </Grid>
                <Grid item sm={6}>
                  <LOButton
                    lable={<DeleteIcon />}
                    size={"small"}
                    color={"secondary"}
                    clickFunction={deleteEvent}
                  />
                </Grid>
              </Grid>)
            })
            }
          </CardContent>
        </Card>
        <br />
        <Grid container spacing={1}>
          <Grid item sm={8}></Grid>
          <Grid item sm={2}>
            <LOButton lable={"Save"} size={"small"} clickFunction={this.props.onSaveButtonClick} />
          </Grid>
          <Grid item sm={2}>
            <LOButton lable={"Cancel"} size={"small"} color={"secondary"} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
