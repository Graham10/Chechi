import React from 'react'
//import { Avatar } from '@material-ui/core';
import '../styles/staff.css'


function staff({ image, name, description, rank }) {
    return (
        <div className='staff'>
            <div className='staff_container'>
                <div className='staff_content'>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                    <h4>{rank}</h4>
                    <p>{description}</p>
                    
                </div>

            </div>
        </div>
    )
}

export default staff