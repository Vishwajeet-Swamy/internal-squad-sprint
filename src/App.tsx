import React from "react";
// import MyClass from "./components/MyClass";
import Tabs from "./components/FullWidthTabs";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          {/* <Grid container spacing={3}> */}
          {/* <Grid item xs={12}> */}
          <Tabs />
          {/* </Grid> */}
          {/* </Grid> */}
        </Container>
      </div>
    );
  }
}

export default App;
