import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import AddNewSquadModal from "./AddNewSquadModal";
import { ModalSquadSprint } from "./ModalSquadSprint";
import SquadDetails from "./SquadDetails";
import SprintDetails from "./SprintDetails";
import FilterSearch from "./FilterSearch";
import AddModalBodySquad from "./AddModalBodySquad";
import MemberModalBody from "./MemberModalBody";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Squad" {...a11yProps(0)} />
          <Tab label="Sprint" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SquadDetails />
          </Grid>
          <Grid
            item
            lg={6}
            container
            alignItems="flex-start"
            justify="flex-end"
          >
            {/* <LOButton lable={"New Squad"} size={"medium"} /> */}
            {/* <AddNewSquadModal /> */}
            <ModalSquadSprint
              lable="New Squad"
              size="medium"
              body01={<AddModalBodySquad />}
              body02={<MemberModalBody />}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <SprintDetails />
          </Grid>
          <Grid
            item
            lg={6}
            container
            alignItems="flex-start"
            justify="flex-end"
          >
            {/* <LOButton lable={"Enter Squad name"} size={"medium"} /> */}
            <FilterSearch />
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
