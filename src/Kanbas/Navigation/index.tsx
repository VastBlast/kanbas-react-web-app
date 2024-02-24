import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaBook, FaRegCalendarAlt, FaUserCircle, FaHistory, FaInbox, FaGlobe, FaTv, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
    const iconSize = 'fs-3'
    const links = [
        { label: "Account", icon: <FaUserCircle className="text-secondary fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className={iconSize} /> },
        { label: "Courses", icon: <FaBook className={iconSize} /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className={iconSize} /> },
        { label: "Inbox", icon: <FaInbox className={iconSize} /> },
        { label: "History", icon: <FaHistory className={iconSize} /> },
        { label: "Studio", icon: <FaTv className={iconSize} /> },
        { label: "Commons", icon: <FaGlobe className={iconSize} /> },
        { label: "Help", icon: <FaQuestionCircle className={iconSize} /> },
    ];
    const { pathname } = useLocation();
    return (
        <>
            {/* desktop: */}
            <div className="d-none d-md-block">
                <ul className="wd-kanbas-navigation">
                    <li>
                        <Link to="/Kanbas">
                            <img alt="logo" className="img-fluid" src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png"></img>
                        </Link>
                    </li>
                    {links.map((link, index) => (
                        // <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        //     <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                        // </li>
                        <Link to={`/Kanbas/${link.label}`}>
                            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                <div style={{ opacity: 0.9 }}>{link.icon}</div> <span className="label">{link.label}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* mobile (TODO): */}
            <div className="d-md-none">

            </div>
        </>
    );
}
export default KanbasNavigation;