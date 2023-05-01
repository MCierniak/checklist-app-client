import React from "react";

import "./App.css"
import TopNav from "./components/TopNav";
import MainWindow from "./components/MainWindow";

class App extends React.Component {
  
  render() {
    return(
      <React.Fragment>
        <TopNav />
        <MainWindow />
      </React.Fragment>
    );
  }

}

export default App;