import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignOutIcon from '../../icons/SignoutIcon'
import './Header.scss'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="container">
                <h1>MERN Blog</h1>

                <div className="sign-out" onClick={() => navigate('/login')} >
                    <span>Sign Out</span>
                    <SignOutIcon width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default Header
