import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import header from './../css/Header.module.css'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
const HeaderComponent = ({handleTopBarToggle}) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <>
            <nav className={header.navBar}>
                <div className={`${header.regular} ${header.layout}`}>
                    <div className={header.logo}><h5>Logo</h5></div>
                    <div className={header.links}>
                            <Link className='hover-underline-animation' to="/">Home</Link>
                            <Link className='hover-underline-animation' to="/about">About</Link>
                            <Link className='hover-underline-animation' to="/portfolio">Portfolio</Link>
                    </div>
                </div> 

                <div className={`${header.stickTop} ${header.layout}`} style={handleTopBarToggle()}>
                    <div className={header.logo}><h5>Logo</h5></div>
                    <div className={header.links}>
                            <Link className='hover-underline-animation' to="/">Home</Link>
                            <Link className='hover-underline-animation' to="/about">About</Link>
                            <Link className='hover-underline-animation' to="/portfolio">Portfolio</Link>
                    </div>
                </div> 
                
                <nav className={header.hamNavBar}>
                    <button onClick={handleToggle}>
                        {navbarOpen ? (
                            <MdClose style={{ color: "#000000", width: "24px", height: "24px" }} />
                        ) : (
                            <FiMenu style={{ color: "#000000", width: "24px", height: "24px" }} />
                        )}
                    </button>
                    <ul className={`${header.menuNav} ${navbarOpen ? ` ${header.showMenu}` : ""}`}>
                        <li>
                            <Link onClick={() => closeMenu()} to="/">Home</Link>
                        </li>
                        <li>        
                            <Link onClick={() => closeMenu()} to="/about">About</Link>
                        </li>
                        <li>
                            <Link onClick={() => closeMenu()} to="/portfolio">Portfolio</Link>
                        </li>

                    </ul>
                </nav>
            </nav>
        </>
      );
}
 
export default HeaderComponent;