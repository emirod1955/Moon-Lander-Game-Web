//Import React
import React from "react";
import { Link } from 'react-router-dom'

//Import styles
import './Home.css';

const Home = () =>{
    return(
       <div>
           <div className="homeTitle">
           <h1 id="tituloHome">Moon Lander <br />Game</h1>
           <img src="https://i.ibb.co/64rmHkH/image-3.png" alt="rocket"/>
           </div>

            <div className="Divs"> 
                <div className="TextDiv">
                    <h2>Lorem Ipsum</h2>
                    <br />
                    <p>
                        We have developed the solution to the poor accessibility of scientific data. An intuitive and interesting video game/simulator, able to encourage young people to investigate the wonders of the Universe and space missions.
                    <br /><br />
                        We present: Moon Lander, a video game with real physics where the user must control a rocket and accomplish the mission.
                    <br /><br />
                        The game has a protagonist and a good amount of data, emphasizing the next mission of Artemis.
                    <br />
                    </p>
                    <Link to="/download">
                        <button className="button">See download options</button>
                    </Link>
                </div>

                <div className="ImgBackground">
                    <img id="RocketImage" alt="Rocket IMG" src="https://i.ibb.co/xF89w2D/image-1.png"/>   
                </div>
            </div>
        </div>
    );
}

export {Home};