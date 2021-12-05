import React from 'react'
import './Input.scss'

const Input = ({label, ...rest}) => {
    return (
        <div className="form-group">
            <label>{ label }</label>
            <input { ...rest } />
        </div>
    )
}

export default Input
