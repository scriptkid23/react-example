import React, { Component } from 'react'
import './style.css'
export default class LifecycleExample extends Component {
    constructor(){
        super();
        this.state = {
            number: 0,
            interval: null,
        }
    }
    increment = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }
    decrement = () => {
        this.setState({
            number: this.state.number  - 1,
        })
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
        clearInterval(this.state.interval);
        
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
        if(this.state.number === -1){
            this.setState({
                number: 0,
            })
        }
    }
    autoIncrement = () => {
        const interval = setInterval(this.increment,1000)
        this.setState({
            interval: interval
        })
    }
    render() {
        return (
            <div className="lifecycle-example">
                <h1>{this.state.number}</h1>
                <div className="d-flex">
                    <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                    <button className="btn btn-success" onClick={this.decrement}>Decrement</button>
                    <button className="btn btn-success" onClick={this.autoIncrement}>Auto Increment</button>
                </div>
            </div>
        )
    }
}
