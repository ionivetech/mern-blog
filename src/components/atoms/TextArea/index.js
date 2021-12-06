import React from 'react'

const TextArea = ({label, ...rest}) => {
    return (
        <div className="form-group">
            <label>{ label }</label>
            <textarea { ...rest }></textarea>
        </div>
    )
}

export default TextArea
