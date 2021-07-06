import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import ArrowFunctionComponent from "../ReactComponentExample/ArrowFunctionComponent";
import ClassComponent from "../ReactComponentExample/ClassComponent";
import FunctionComponent from "../ReactComponentExample/FunctionComponent";
import ReactComponentExample from "../ReactComponentExample/ReactComponentExample";
import LifecycleExample from '../LifecycleExample/LifecycleExample'
import PropsStateExample from '../PropsStateExample/PropsStateExample'
import APIExample from '../APIExample/APIExample'
export default class ReactRouterExample extends Component {
  render() {
    return (
      <BrowserRouter>
       
        <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand">React Example</span>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/member" className="nav-link">Home</Link>
                        <Link to="/member/lily" className="nav-link">Lily</Link>
                        <Link to="/member/peter" className="nav-link">Peter</Link>
                        <Link to="/member/tomas" className="nav-link">Tomas</Link>
                        <Link to="/lifecycle" className="nav-link">React Lifecycle</Link>
                        <Link to="/props-state" className="nav-link">Props & State</Link>
                        <Link to="/api" className="nav-link">API</Link>
                    </div>
                </div>
            </div>
        </nav>

        <Switch>
          <Route exact path="/lifecycle" component={LifecycleExample}/>
          <Route exact path="/member" component={ReactComponentExample} />
          <Route exact path="/member/lily" component={ArrowFunctionComponent} />
          <Route exact path="/member/peter" component={ClassComponent} />
          <Route exact path="/member/tomas" component={FunctionComponent} />
          <Route exact path="/props-state" component={PropsStateExample} />
          <Route exact path="/api" component={APIExample} />
        </Switch>
      </BrowserRouter>
    );
  }
}
