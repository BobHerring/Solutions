import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Seed Theory</h1>
      <div className={styles.navlinks}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  )
}
