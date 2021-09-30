//Import React
import React from "react";
import { Link, withRouter } from "react-router-dom";

//Import styles
import '../styles/styles.css';

function NavBar(props){
    return(
        <nav>
            <ul>
                <li id="liImg"><img src="https://i.ibb.co/n163KC1/Untitled.png" alt="Unnamed" border="0" id="logo"/></li>
                <li id="li" class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                    <Link class="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li id="li" class={`nav-item  ${props.location.pathname === "/download" ? "active" : ""}`}>
                    <Link class="nav-link" to="/download">
                        Download
                    </Link>
                </li>
                <li id="li" class={`nav-item  ${props.location.pathname === "/web" ? "active" : ""}`}>
                    <Link class="nav-link" to="/web">
                        Play web version
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(NavBar);