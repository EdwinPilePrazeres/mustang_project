import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png'

const Navbar = () => {
    return (
            <header className="header">
                <Link className='Logo'><img src={Logo} alt='' /></Link>
                <ul>
                    <li><Link >60's</Link></li>
                    <li><Link >70's</Link></li>
                    <li><Link >80's</Link></li>
                    <li><Link >90's</Link></li>
                    <li><Link >00's</Link></li>
                    <li><Link >10's</Link></li>
                    <li><Link >20's</Link></li>
                </ul>
            </header>
            
    )
}

export default Navbar
