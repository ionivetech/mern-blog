import React from 'react'
import './Upload.scss'
import { DummyImage } from '../../../assets'

const Upload = ({label}) => {
    return (
        <div className="form-upload">
            <label>{ label }</label>
            <input type="file" />
            <img className="preview-img" src={DummyImage} alt="preview-upload" />
        </div>
    )
}

export default Upload
