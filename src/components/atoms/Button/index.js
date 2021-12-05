import React from 'react'
import './Button.scss'

const Button = ({text, ...rest}) => {
    return (
        <button {...rest}>{text}</button>
    )
}

export default Button