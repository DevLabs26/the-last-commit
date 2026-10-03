import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-label">// CONNECTION TERMINATED</p>

          <h2>
            THE LAST
            <br />
            COMMIT.
          </h2>
        </div>

        <div className="footer-links">
          <a href="#story">Story</a>
          <a href="#challenges">Challenges</a>
          <a href="#timeline">Timeline</a>
          <a href="#prizes">Prizes</a>
          <a href="#rules">Rules</a>
          <a href="#register">Register</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 THE LAST COMMIT</span>

        <span>SYSTEM STATUS: OFFLINE</span>
      </div>
    </footer>
  )
}

export default Footer