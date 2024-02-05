import nome from "./assets/Nome.png"
import "./nav.css"

export default function Nav() {
    
    return(
        <nav className="nav">
            <h1 className="logo">La Forchetta</h1>
            <lu>
                <li className="Book"><a href="">Book a Table</a></li>
                <li className="Service"><a href="">Service</a></li>
                <li className="About"><a href="">About</a></li>
                <li className="Home"><a href="index.html">Home</a></li>
            </lu>
        </nav>
    );
}