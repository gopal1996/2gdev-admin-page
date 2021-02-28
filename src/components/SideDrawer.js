import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// Icons
import {FiFilm, FiAirplay, FiKey} from 'react-icons/fi'
import {AiOutlineCamera, AiOutlineTeam} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
// import {MdEvent} from 'react-icons/md'

const SideDrawer = ({companyID, show}) => {
    const [activeLink, setActiveLink] = useState("/admin")

    return (
        <div className={show ? 'side-drawer side-drawer--open' : 'side-drawer'}>
            <div className="side-drawer__block">
                <div className="side-drawer__navigation">
                    <ul>
                        <span className="side-drawer__title">Display Data</span>
                        <li className={activeLink === "/admin/banner" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/banner`} onClick={() => setActiveLink("/admin/banner")} className="side-drawer__link"><FiFilm className="side-drawer__svg" />Banner</Link>
                        </li>
                        <li className={activeLink === "/admin/social" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/social`} onClick={() => setActiveLink("/admin/social")} className="side-drawer__link"><TiSocialFacebook className="side-drawer__svg" />Social Media</Link>
                        </li>
                        <li className={activeLink === "/admin/about" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/about`} onClick={() => setActiveLink("/admin/about")} className="side-drawer__link"><TiSocialFacebook className="side-drawer__svg" />About</Link>
                        </li>
                        <li className={activeLink === "/admin/whyus" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/whyus`} onClick={() => setActiveLink("/admin/whyus")} className="side-drawer__link"><FiKey className="side-drawer__svg" />Why Us</Link>
                        </li>
                        <li className={activeLink === "/admin/features" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/features`}  onClick={() => setActiveLink("/admin/features")} className="side-drawer__link"><FiKey className="side-drawer__svg" />Features</Link>
                        </li>
                        <li className={activeLink === "/admin/services" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/services`}  onClick={() => setActiveLink("/admin/services")} className="side-drawer__link"><FiKey className="side-drawer__svg" />Services</Link>
                        </li>
                        <li className={activeLink === "/admin/gallery" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/gallery`} onClick={() => setActiveLink("/admin/gallery")} className="side-drawer__link"><AiOutlineCamera className="side-drawer__svg" />Gallery</Link>
                        </li>
                        <li className={activeLink === "/admin/payments" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/payments`}  onClick={() => setActiveLink("/admin/payments")} className="side-drawer__link"><AiOutlineCamera className="side-drawer__svg" />Payments</Link>
                        </li>
                        <li className={activeLink === "/admin/videos" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/videos`} onClick={() => setActiveLink("/admin/videos")} className="side-drawer__link"><AiOutlineTeam className="side-drawer__svg" />Videos</Link>
                        </li>
                        <li className={activeLink === "/admin/contact" ? "side-drawer__list side-drawer__list--active" : "side-drawer__list"}>
                            <Link to={`/${companyID}/admin/contact`} onClick={() => setActiveLink("/admin/contact")} className="side-drawer__link"><FiAirplay className="side-drawer__svg" />Contact</Link>
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
