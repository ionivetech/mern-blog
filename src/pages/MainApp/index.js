import React from 'react'
import './MainApp.scss'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>
            
            <div className="content-wrapper">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default MainApp
