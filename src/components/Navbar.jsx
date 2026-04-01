import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const getNavClass = ({ isActive }) =>
  isActive ? 'nav-link nav-link-active' : 'nav-link'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

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
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
