import React from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom'
import { BlogList, Button, Gap } from '../../components'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="btn-create-blog-wrapper">
                <Button text="Create Blog" className="btn btn-primary" onClick={() => navigate('/create-blog')} />
            </div>
            <Gap height={40} />
            {/* Blog List */}
            <div className="blog-lists">
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
            </div>
            <Gap height={40} />
            {/* Pagination */}
            <div className="pagination">
                <Button text="Prev" className="btn btn-secondary" />
                <Gap width={10} />
                <Button text="1" className="btn btn-primary" />
                <Gap width={10} />
                <Button text="Next" className="btn btn-secondary" />
            </div>
        </div>
    )
}

export default Home
