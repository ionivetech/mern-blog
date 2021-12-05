import React from 'react'
import { Button, Gap, Input, Link } from '../../components'

const index = () => {
    return (
        <div className="auth">
            <div className="auth-card">
                <h3>Login to Your Account</h3>
                <Gap height={20} />
                <div>
                    <Input label="Email" type="email" placeholder="Input your email" />
                    <Input label="Password" type="password" placeholder="Min 8 characters" />
                    <Gap height={30} />
                    <Button text="Login" className="btn btn-primary btn-block" />
                </div>
                <Gap height={20} />
                <Link text="Belum punya akun? Daftar sekarang" className="link-goto" />
            </div>
        </div>
    )
}

export default index