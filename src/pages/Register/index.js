import React from 'react'
import './Register.scss'
import { Button, Gap, Input, Link } from '../../components'

const index = () => {
    return (
        <div className="auth">
            <div className="auth-card">
                <h3>Create New Account</h3>
                <Gap height={20} />
                <div>
                    <Input label="Full Name" type="text" placeholder="Input your full name" />
                    <Input label="Email" type="email" placeholder="Input your email" />
                    <Input label="Password" type="password" placeholder="Min 8 characters" />
                    <Gap height={30} />
                    <Button text="Register" className="btn btn-primary btn-block" />
                </div>
                <Gap height={20} />
                <Link text="Kembali ke Login" className="link-goto" />
            </div>
        </div>
    )
}

export default index