import React, { Component } from 'react'
import ArrowFunctionComponent from './ArrowFunctionComponent';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent'
import './style.css'
export default class ReactComponentExample extends Component {
    render() {
        return (
            <div id="react-component-container">
                <ArrowFunctionComponent/>
                <ClassComponent/>
                <FunctionComponent/>
            </div>
        )
    }
}
