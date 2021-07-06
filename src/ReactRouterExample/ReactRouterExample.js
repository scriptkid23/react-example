import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import AnonymousFunctionComponent from '../ReactComponentExample/AnonymousFunctionComponent'
import ClassComponent from '../ReactComponentExample/ClassComponent'
import FunctionComponent from '../ReactComponentExample/FunctionComponent'
import ReactComponentExample from '../ReactComponentExample/ReactComponentExample'

export default class ReactRouterExample extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="d-flex">
                    <Link to="/member" className="mr-3">Member</Link>
                    <Link to="/member/lily" className="mr-3">Lily</Link>
                    <Link to="/member/peter" className="mr-3">Peter</Link>
                    <Link to="/member/tomas" className="mr-3">Tomas</Link>
                </div>
               
                <Switch>
                    <Route exact path="/member" component={ReactComponentExample}/>
                    <Route exact path="/member/lily" component={AnonymousFunctionComponent}/>
                    <Route exact path="/member/peter" component={ClassComponent}/>
                    <Route exact path="/member/tomas" component={FunctionComponent}/>
                </Switch>
            </BrowserRouter>
        )
    }
}