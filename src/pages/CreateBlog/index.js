import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import './CreateBlog.scss'

const CreateBlog = () => {
    const navigate = useNavigate()

    return (
        <div className="create-blog">
            <h2>Create New Blog</h2>
            <Gap height={20} />
            <div className="card">
                <Input label="Title Blog" type="text" placeholder="Input title blog" />
                <Input label="Author Name" type="text" placeholder="Input author name" />
                <TextArea label="Description" placeholder="Input description" />
                <Upload label="Upload Photo" />

                <Gap height={40} />

                <div className="wrap-button">
                    <Button text="Cancel" className="btn btn-secondary" onClick={() => navigate('/')} />
                    <Gap width={10} />
                    <Button text="Create New Blog" className="btn btn-primary" />
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
