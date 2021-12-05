import React from 'react'
import './Link.scss'

const Link = ({text, onClick, ...rest}) => {
    return (
        <p onClick={onClick} {...rest}>{ text }</p>
    )
}

export default Link