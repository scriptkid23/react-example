import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/image.png'
export default () => {
    return (
        <div className="anonymous-function-component flex-fill">   
            <img src={Avatar} alt="avatar" className="rounded-circle"/>
        </div>
    )
}
