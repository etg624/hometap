import React from 'react'
import logo from '../../assets/hometap-logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <>
      <header className="main-header">
        <figure>
          <Link to="/">
            <img className="main-header__logo" src={logo} alt="Hometap Logo" />
          </Link>
        </figure>
      </header>
      <div className="header-spacing"></div>
    </>
  )
}

export default Header
