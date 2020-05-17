import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export interface IProps {
  lable: any;
  size: "small" | "medium" | "large";
  clickFunction?: any;
  color?: any;
}

export default class LOButton extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    color: "primary",
  };
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          size={this.props.size}
          color={this.props.color}
          onClick={this.props.clickFunction}
        >
          {this.props.lable}
        </Button>
      </div>
    );
  }
}
