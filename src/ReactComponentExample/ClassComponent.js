import React, { Component } from 'react'
import Avatar from '../assets/Sheik.png'
export default class ClassComponent extends Component {
    render() {
        return (
            <div className="class-component flex-fill" onClick={() => alert("Hi!")}>
                <img src={Avatar} alt="avatar" className="rounded-circle"/>
            </div>
        )
    }
}
