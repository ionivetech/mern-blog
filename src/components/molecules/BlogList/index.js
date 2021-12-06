import React from 'react'
import { Link } from "react-router-dom"
import { DummyImage } from '../../../assets'
import './BlogList.scss'

const BlogList = () => {
    return (
        <Link to="/detail-blog" className="blog-list">
            <img src={DummyImage} alt="dummy-image" />

            <p className="blog-list-title">Title Blog</p>
            <p className="blog-list-author">Author Blog</p>
            <p className="blog-list-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sapien id enim finibus tempor. Etiam purus nunc, faucibus nec gravida sit amet, condimentum sit amet ex. Quisque facilisis purus leo, eget pretium augue bibendum sit amet. Aenean bibendum mi magna, luctus fermentum nibh fringilla nec. Sed vehicula orci lectus.
            </p>
        </Link>
    )
}

export default BlogList