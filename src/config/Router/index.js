import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainApp, Login, Register } from '../../pages'
import Home from '../../pages/Home'
import CreateBlog from '../../pages/CreateBlog'
import DetailBlog from '../../pages/DetailBlog'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Login */}
                <Route path="/login" element={<Login />} />

                {/* Register */}
                <Route path="/register" element={<Register />} />

                {/* Main App */}
                <Route path="/" element={<MainApp />} >
                    {/* Home */}
                    <Route path="/" element={<Home />} />

                    {/* Create Blog */}
                    <Route path="/create-blog" element={<CreateBlog />} />

                    {/* Detail Blog */}
                    <Route path="/detail-blog" element={<DetailBlog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
