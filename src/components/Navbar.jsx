import { NavLink } from 'react-router-dom'

const getNavClass = ({ isActive }) =>
  isActive ? 'nav-link nav-link-active' : 'nav-link'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className={getNavClass} end>
          Home
        </NavLink>
        <NavLink to="/about" className={getNavClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={getNavClass}>
          Contact
        </NavLink>
        <NavLink to="/user/guest" className={getNavClass}>
          User
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
