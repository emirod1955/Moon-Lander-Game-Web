//Import React
import React from "react";
import { Link } from 'react-router-dom'

//Import styles
import '../styles/styles.css';

const Home = () =>{
    return(
       <div className="Divs"> 
            <div className="ImgBackground">
                <img id="RocketImage" src="https://i.pinimg.com/originals/67/b2/a9/67b2a9ba5e85822f237caae92111e938.gif" alt="Rocket IMG"/>   
            </div>

            <div className="TextDiv">
                <h1>Moon Lander Game</h1>
               <br />
               <p>
               We have developed the solution to the poor accessibility of scientific data. An intuitive and interesting video game/simulator, able to encourage young people to investigate the wonders of the Universe and space missions.
                <br /><br />
                We present: Moon Lander, a video game with real physics where the user must control a rocket and accomplish the mission.
                <br /><br />
                The game has a protagonist and a good amount of data, emphasizing the next mission of Artemis.
                <br />
                </p>
                <Link className="DownloadHome" to="/download">
                <button id="button">See download options</button>
                </Link>
            </div>
        </div>
    );
}

export {Home};