import React from 'react'
import logo from '../../assets/hometap-logo.svg'
import './Header.css'
const Header = () => {
  return (
    <header class="main-header">
      <figure>
        <img className="main-header__logo" src={logo} alt="Hometap Logo" />
      </figure>
    </header>
  )
}

export default Header