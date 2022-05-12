import "./Navbar.css"

export function Navbar() {
    return(
    <nav className="navbar">
      <ul>
        <a href="#Home">
          <li>Home</li>
        </a>
        <a href="#About">
          <li>About</li>
        </a>
        <a href="#Skills">
          <li>Skills</li>
        </a>
        <a href="#Projects">
          <li>My Projects</li>
        </a>
        <a href="#Contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
    )
}