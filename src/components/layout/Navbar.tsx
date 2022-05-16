import "./Navbar.css"
import Logo2 from '../Assets/Logo2.png';

export function Navbar() {
    return(
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={Logo2} alt="Logo"></img>
      </div>
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