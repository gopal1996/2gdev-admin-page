import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ToggleLeft } from '../assets/images/icons/toggle-left.svg'
import { ReactComponent as ToggleRight } from '../assets/images/icons/toggle-right.svg'

const Navbar = ({show, drawerClickHandler}) => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div className="navbar__logo">
                    <div className="navbar__brand">
                        <Link to="/" className="navbar__link">
                            {show ? 'Alphas9': 'Alphas9'}
                        </Link>
                        { 
                        show 
                            ? (
                                <button className="navbar__toggler" onClick={() => drawerClickHandler(prevState => !prevState)} >
                                    <ToggleLeft className="navbar__toggle navbar__toggle--left" />
                                </button>
                            )
                            : (
                                <button className="navbar__toggler" onClick={() => drawerClickHandler(prevState => !prevState)} >
                                    <ToggleRight className="navbar__toggle navbar__toggle--right" />
                                </button>
                            )
                        }
                        
                        
                    </div>
                    {/* <div className="navbar__contacts">
                        <a href="/">whatsapp</a>
                        <a href="/">Phone</a>
                    </div> */}
                </div>
                <div className="spacer"></div>
                {/* <div className="navbar__navigation-items">
                    <ul>
                        <li><a href="/">whatsapp</a></li>
                        <li><Link to="/">phone</Link></li>                            
                    </ul>
                </div> */}
            </nav>
        </header>
    )
}

export default Navbar
