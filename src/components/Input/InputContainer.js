import React from 'react'

const InputContainer =(props)=>{
    let {placeholder} = props
    return(

        <div>
            <input placeholder={placeholder} />
        </div>
    )
}

export default InputContainer;