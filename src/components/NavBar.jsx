//Import React
import React from "react";
import { Link, withRouter } from "react-router-dom";

//Import styles
import '../styles/styles.css';

function NavBar(props){
    return(
        <nav>
            <ul>
                <li id="liImg"><a href="https://2021.spaceappschallenge.org/challenges/statements/planetary-lander-video-game/teams/unnamed-1/project" target="_blank" rel="noreferrer"><img src="https://i.ibb.co/n163KC1/Untitled.png" alt="Unnamed" border="0" id="logo"/></a>
                </li>
                <li id="li" className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li id="li" className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                    <Link className="nav-link" to="/about">
                    About
                    </Link>
                </li>
                <li id="li" className={`nav-item  ${props.location.pathname === "/info" ? "active" : ""}`}>
                    <Link className="nav-link" to="/resources">
                    Resources
                    </Link>
                </li>
                <li id="li" className={`nav-item  ${props.location.pathname === "/download" ? "active" : ""}`}>
                    <Link className="nav-link" to="/download">
                        Download
                    </Link>
                </li>
                <li id="li" className={`nav-item  ${props.location.pathname === "/web" ? "active" : ""}`}>
                        <a href="https://veinad.itch.io/moon-lander-the-game" target="_blank" rel="noreferrer">Play web version</a>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(NavBar);