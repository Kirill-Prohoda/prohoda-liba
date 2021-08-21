import React from 'react';
import './Input.css';

export const Input = ({placeholder})=>{
    return(
        <div>
            <input placeholder={placeholder} />
        </div>
    )
}