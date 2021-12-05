import React from 'react'
import { Outlet } from 'react-router-dom'

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            
            <Outlet />

            <p>Footer</p>
        </div>
    )
}

export default MainApp
