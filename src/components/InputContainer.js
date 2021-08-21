import React from 'react'
let InputContainer = (props) =>{
    let {placeholder} = props
    return (
        <div>
            <input placeholder={placeholder} />
        </div>
    )
}

export default InputContainer