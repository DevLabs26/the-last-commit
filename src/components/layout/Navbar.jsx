import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        THE LAST COMMIT
      </a>

      <div className="navbar-links">
        <a href="#story">Story</a>
        <a href="#challenges">Challenges</a>
        <a href="#timeline">Timeline</a>
        <a href="#register">Register</a>
      </div>
    </nav>
  )
}

export default Navbar