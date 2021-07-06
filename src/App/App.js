import React from "react";
import APIExample from "../APIExample/APIExample";
import LifecycleExample from "../LifecycleExample/LifecycleExample";
import PropsStateExample from "../PropsStateExample/PropsStateExample";
import ReactComponentExample from "../ReactComponentExample/ReactComponentExample";
import ReactRouterExample from "../ReactRouterExample/ReactRouterExample";
import AppComponent from "./AppComponent";


function App() {
  return (
    <React.Fragment>
      {/* <AppComponent/> */}
      {/* <ReactComponentExample/> */}
      {/* <PropsStateExample/> */}
      {/* <LifecycleExample/>    */}
      <ReactRouterExample/>
      {/* <APIExample/> */}
    </React.Fragment>
  );
}

export default App;
