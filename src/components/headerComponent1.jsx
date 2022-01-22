import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import header from './../css/Header1.module.css'
import logo from './../images/logo.png'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
const HeaderComponent = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    const renderToHome = () => {
        window.location.pathname = '/';
    }
    return (
        <>
            <nav className={header.navBar}>
                <nav className={header.hamNavBar}>
                    <div className={header.logo} onClick={()=>renderToHome()}>
                        <img src={logo} alt='logo' width='96px' />
                    </div>
                    <button onClick={handleToggle}>
                        {navbarOpen ? (
                            <MdClose style={{ color: "#ffffff", width: "32px", height: "36px" }} />
                        ) : (
                            <FiMenu style={{ color: "#6d0a18", width: "32px", height: "36px" }} />
                        )}
                    </button>
                    <ul className={`${header.menuNav} ${navbarOpen ? ` ${header.showMenu}` : ""}`}>
                        <li>
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/">Home</Link>
                        </li>
                        <li>        
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/project">Project</Link>
                        </li>

                    </ul>
                </nav>
            </nav>
        </>
      );
}
 
export default HeaderComponent;