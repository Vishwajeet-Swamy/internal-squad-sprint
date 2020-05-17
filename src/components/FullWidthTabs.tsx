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
import { RootState } from '../store';
import { Squad, Member } from '../store/squad/types'
import { addSquad, deleteSquad } from '../store/squad/action'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

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

interface IProps {
  squads: Squad[],
  onAddSquad: (data: Squad) => void;
  onDeleteSquad: (id: string) => void;
}

const FullWidthTabs: React.FC<IProps> = ({ squads, onAddSquad, onDeleteSquad }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [squadName, setSquadName] = React.useState('')
  const [memberName, setMemberName] = React.useState('')
  const [members, setMembers] = React.useState<Member[] | []>([])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSquadInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSquadName(event.target.value);
  };

  const handleMemberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemberName(event.target.value);
  };

  const handleAddButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const mem = [...members]
    mem.push({
      memberId: `member~${+Date.now().toString()}`,
      memberName: memberName
    })
    setMembers(mem);
    setMemberName('');
  };

  const handleSaveButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (squadName === '') {
      alert('Please enter sqaud name..')
      return
    }
    if (members.length === 0) {
      alert('Please enter member data')
      return
    }
    const data = {
      id: `squad~${+Date.now().toString()}`,
      name: squadName,
      members: members
    }
    onAddSquad(data);
  };

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    const mem = [...members]
    setMembers(mem.filter(member => member.memberId !== id));
  };

  const handleDeleteSquadClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    onDeleteSquad(id);
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
            <SquadDetails squads={squads} onDeleteSquadClick={handleDeleteSquadClick} />
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
              body01={<AddModalBodySquad value={squadName} handleInputChange={handleSquadInputChange} />}
              body02={<MemberModalBody
                members={members}
                value={memberName}
                handleInputChange={handleMemberInputChange}
                onAddButtonClick={handleAddButtonClick}
                onSaveButtonClick={handleSaveButtonClick}
                onDeleteButtonClick={handleDeleteButtonClick}
              />}
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

const mapStateToProps = (store: RootState) => {
  return {
    squads: store.squad.squads,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddSquad: (data: Squad) => dispatch(addSquad(data)),
  onDeleteSquad: (id: string) => dispatch(deleteSquad(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FullWidthTabs)