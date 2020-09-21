import React from 'react'
import logo from '../../assets/hometap-logo.svg'
import './Header.css'
const Header = () => {
  return (
    <>
      <header className="main-header">
        <figure>
          <img className="main-header__logo" src={logo} alt="Hometap Logo" />
        </figure>
      </header>
      <div className="header-spacing"></div>
    </>
  )
}

export default Header
