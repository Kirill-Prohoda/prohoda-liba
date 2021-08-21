import React from 'react'
export let InputContainer = (props) =>{
    let {placeholder} = props
    return (
        <div>
            <input placeholder={placeholder} />
        </div>
    )
}