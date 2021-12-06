import React from 'react'
import './Footer.scss'
import { ICLinkedin, ICInstagram } from '../../../assets'
import { Gap } from '../..'

// Icon Component
const Icon = ({src, alt}) => {
    return (
        <div className="social-logo">
            <img src={src} alt={alt} />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <p>Ionive Tech</p>
                    <Gap width={20} />
                    <div className="social">
                        <Icon src={ICLinkedin} alt='linkedin-logo' />
                        <Gap width={10} />
                        <Icon src={ICInstagram} alt='instagram-logo' />
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright ©2021 Ionive Tech</div>
        </div>
    )
}

export default Footer
