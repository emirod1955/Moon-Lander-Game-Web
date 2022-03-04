//Import React
import React from "react";
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

//Import styles
import './Home.css';

const Home = () =>{
    return(
       <div>
           <div className="homeTitle">
           <h1 id="tituloHome">Moon Lander <br />Game</h1>
           <img src="https://i.ibb.co/64rmHkH/image-3.png" alt="rocket"/>
           </div>

           <Fade>
               <div className="Divs"> 
                    <div className="TextDiv">
                        <h2 className="subtitle">THE GAME</h2>
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
            </Fade>
            
            
<Fade>
    <div className="Divs"> 

<div className="ImgBackground">
        <img id="RocketImage" alt="Rocket IMG" src="https://i.ibb.co/xGTTjqr/image.png"/>   
    </div>

    <div className="TextDiv">
        <h2 className="subtitle">SPACE AGENCY DATA</h2>
        <br />
        <p>
        We used 3D models provided by NASA as a reference for some models and to place in the video game, so that it looks more beautiful.
        <br /><br />
        We are inspired by Artemis' mission to inspire girls to be part of scientific research too. The main character is a woman since we make reference to the first woman to land on the Moon.
        <br /><br />
        We used data from the Starship to make the physics realistic.
        <br />
        </p>
    </div>
</div>
</Fade>

<Fade>
    <div className="Divs"> 
                <div className="TextDiv">
                    <h2 className="subtitle">HOW TO PLAY</h2>
                    <br />
                    <p>
                        We have developed the solution to the poor accessibility of scientific data. An intuitive and interesting video game/simulator, able to encourage young people to investigate the wonders of the Universe and space missions.
                    <br /><br />
                        We present: Moon Lander, a video game with real physics where the user must control a rocket and accomplish the mission.
                    <br /><br />
                        The game has a protagonist and a good amount of data, emphasizing the next mission of Artemis.
                    <br />
                    </p>
                    <div className="Buttons">
                                <div className="HomeButton1">
                                    <a href="https://drive.google.com/file/d/1FOFxHdBVBZ6d_BeXz9hDCLAu1abCDGh_/view?usp=sharing"><input id="HomeButtonYoutube" type="button" value="Youtube tutorial"></input></a>
                                </div>
                                <div className="HomeButton2">
                                    <a href="https://drive.google.com/file/d/1FOFxHdBVBZ6d_BeXz9hDCLAu1abCDGh_/view?usp=sharing"><input id="HomeButtonPDF" type="button" value="Manual PDF"></input></a>
                                </div>
                            </div>
                </div>
            </div>
            </Fade>
                    
            <Fade>
                <div className="TimeLineBox">
                    <h1 className="subtitle">THE SIMULATOR MISSIONS UBICATED IN TIME</h1>
                    <div className="DivsDownload"> 
                        <div>
                            <img id="StarshipImage" src="https://i.ibb.co/GJYFvfc/image-4.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                </Fade>

        </div>
    );
}

export {Home};