import React from 'react'
import {Link} from 'react-router-dom'
// Icons
import {FiFilm, FiAirplay, FiKey} from 'react-icons/fi'
import {AiOutlineCamera, AiOutlineTeam} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
// import {MdEvent} from 'react-icons/md'

const SideDrawer = ({show}) => {
    return (
        <div className={show ? 'side-drawer side-drawer--open' : 'side-drawer'}>
            <div className="side-drawer__block">
                <div className="side-drawer__navigation">
                    <ul>
                        {/* <span className="side-drawer__title">Dashboard</span>
                        <li className="side-drawer__list">
                            <Link to="/" className="side-drawer__link"><FiActivity className="side-drawer__svg" />Default</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/analytics" className="side-drawer__link"><AiOutlinePieChart className="side-drawer__svg" />Analytics</Link>
                        </li> */}
                        <span className="side-drawer__title">Display Data</span>
                        <li className="side-drawer__list">
                            <Link to="/banner" className="side-drawer__link"><FiFilm className="side-drawer__svg" />Banner</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/social" className="side-drawer__link"><TiSocialFacebook className="side-drawer__svg" />Social Media</Link>
                        </li>
                        <li className="side-drawer__list side-drawer__list--active">
                            <Link to="/about" className="side-drawer__link"><TiSocialFacebook className="side-drawer__svg" />About</Link>
                        </li>
                        <li className="side-drawer__list side-drawer__list">
                            <Link to="/whyus" className="side-drawer__link"><FiKey className="side-drawer__svg" />Why Us</Link>
                        </li>
                        <li className="side-drawer__list side-drawer__list">
                            <Link to="/features" className="side-drawer__link"><FiKey className="side-drawer__svg" />Features</Link>
                        </li>
                        <li className="side-drawer__list side-drawer__list">
                            <Link to="/services" className="side-drawer__link"><FiKey className="side-drawer__svg" />Services</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/gallery" className="side-drawer__link"><AiOutlineCamera className="side-drawer__svg" />Gallery</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/payments" className="side-drawer__link"><AiOutlineCamera className="side-drawer__svg" />Payments</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/videos" className="side-drawer__link"><AiOutlineTeam className="side-drawer__svg" />Videos</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/contact" className="side-drawer__link"><FiAirplay className="side-drawer__svg" />Contact</Link>
                        </li>
                        {/* <li className="side-drawer__list">
                            <Link to="/authentication" className="side-drawer__link"><FiKey className="side-drawer__svg" />Authentication</Link>
                        </li> */}
                        {/* <span className="side-drawer__title">App</span>
                        <li className="side-drawer__list">
                            <Link to="/maps" className="side-drawer__link"><FiMapPin className="side-drawer__svg" />Maps</Link>
                        </li> */}
                        {/* <li className="side-drawer__list">
                            <Link to="/mail" className="side-drawer__link"><FiMail className="side-drawer__svg" />Mail</Link>
                        </li> */}
                        {/* <li className="side-drawer__list">
                            <Link to="/events" className="side-drawer__link"><MdEvent className="side-drawer__svg" />Events</Link>
                        </li>
                        <span className="side-drawer__title">Help</span>
                        <li className="side-drawer__list">
                            <Link to="/history" className="side-drawer__link"><AiOutlineHistory className="side-drawer__svg" />History</Link>
                        </li>
                        <li className="side-drawer__list">
                            <Link to="/contact" className="side-drawer__link"><AiOutlinePhone className="side-drawer__svg" />Contact Us</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer
