import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../Assets/logo/white1.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const handleClick = ()=> {
        setIsOpen(p => !p)
    }

    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 500);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <header className={`${isSticky ? 'sticky' : ''}`}>
        <div className="header-logo">
            <img src={logo} alt="Air Jupiter" />
        </div>
        <nav>
            <ul className={`navlist ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/hajj'>Hajj</NavLink>
                </li>
                <li>
                    <NavLink to='/umrah'>Umrah</NavLink>
                </li>
                <li>
                    <NavLink to='/internatinal'>International</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
        <div className="hide-desktop">
            <button onClick={handleClick}>
            <i className={`bx bx-${isOpen ? 'x': 'menu'}`}></i>
            </button>
        </div>
    </header>
  )
}
