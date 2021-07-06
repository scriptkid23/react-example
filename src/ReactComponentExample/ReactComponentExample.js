import React, { Component } from 'react'
import AnonymousFunctionComponent from './AnonymousFunctionComponent';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent'
import './style.css'
export default class ReactComponentExample extends Component {
    render() {
        return (
            <div id="react-component-container">
                <AnonymousFunctionComponent/>
                <ClassComponent/>
                <FunctionComponent/>
            </div>
        )
    }
}
