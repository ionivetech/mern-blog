import React from 'react'
import SignOutIcon from '../../icons/SignoutIcon'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <h1>MERN Blog</h1>

                <div className="sign-out">
                    <span>Sign Out</span>
                    <SignOutIcon width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default Header
