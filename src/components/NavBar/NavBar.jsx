//Import React
import React from "react";
import { Link, withRouter } from "react-router-dom";

//Import styles
import './NavBar.css';

function NavBar(props){
    return(
        <header className="header">
            <nav className="nav">
                <a className="logo" href="https://2021.spaceappschallenge.org/challenges/statements/planetary-lander-video-game/teams/unnamed-1/project" target="_blank" rel="noreferrer">Unnamed.<sup>Team</sup></a>
                <button className="nav-toggle"><i class="fas fa-bars"></i></button>
                <ul className="nav-menu ">                 
                    <li className={`nav-menu-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-menu-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                        <Link className="nav-link" to="/about">
                        Community
                        </Link>
                    </li>
                    <li className={`nav-menu-item  ${props.location.pathname === "/download" ? "active" : ""}`}>
                        <Link className="nav-link" to="/download">
                            Download
                        </Link>
                    </li>
                    <li id="liPlay" className={`nav-menu-item  ${props.location.pathname === "/web" ? "active" : ""}`}>
                        <a href="https://veinad.itch.io/moon-lander-the-game" target="_blank" rel="noreferrer" className="PlayBeta">Play beta</a>
                    </li>
                </ul>
                {/*<img className="userImage" src="https://i.ibb.co/zr3gC5t/image-6.png" alt="" srcset=""/>*/}
            </nav>
        </header>  
    );
}

export default withRouter(NavBar);