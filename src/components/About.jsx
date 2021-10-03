//Import React
import React from "react";

//Import styles
import '../styles/styles.css';

function About (){
    return(
        <div className="About">
            <div className="AstronautBox">
                    <div className="DivsDownload"> 
                    <div className="AstronautText">
                            <h1>Mission commander</h1>
                            <br />
                            <p>
                                <b>Name</b>: Julia Espino
                                <br />
                                <b>Age</b>: 33 years old
                                <br />
                                <b>Country</b>: Uruguay
                            </p>
                            <br />
                            <h2><a id="LinkDecoration" href="https://sourceb.in/XSq9Ehdmlm" target="_blank" rel="noreferrer">Astronaut 3D design</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/4203jtH/astronauta.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                <div className="ManualBox">
                    <div className="DivsDownload"> 
                    <div className="WindowsText">
                            <h1>Who to play</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://nasa3d.arc.nasa.gov/detail/astronaut" target="_blank" rel="noreferrer">Manual</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://cdn-icons-png.flaticon.com/512/4403/4403511.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                <div className="MissionBox">
                    <h1 id="MissionsTitle">Future missions to uplode to the simulator...</h1>
                    <div className="DivsDownload"> 
                    <div className="MissionText">
                            <h1>Apolo 11</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://nasa3d.arc.nasa.gov/detail/Apollo11-Landing" target="_blank" rel="noreferrer">Apolo 11 3D terrain</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/F0LY3ts/apolo-11-removebg-preview.png" alt="Rocket IMG"/>   
                        </div>
                    </div>

<hr />

                    <div className="DivsDownload"> 
                    <div className="MissionText">
                            <h1>Apolo 14</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://nasa3d.arc.nasa.gov/detail/Apollo14-Landing" target="_blank" rel="noreferrer">Apolo 14 3D terrain</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/px0M1Bh/apolo-14-removebg-preview.png" alt="Rocket IMG"/>   
                        </div>
                    </div>

<hr />

                    <div className="DivsDownload"> 
                    <div className="MissionText">
                            <h1>Apolo 17</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://nasa3d.arc.nasa.gov/detail/Apollo17-Landing" target="_blank" rel="noreferrer">Apolo 17 3D terrain</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/6gw6Lwq/apolo-17-removebg-preview.png" alt="Rocket IMG"/>   
                        </div>
                    </div>

                </div>
                <div className="TimeLineBox">
                    <h1 id="MissionsTitle">The simulator missions ubicated in time</h1>
                    <div className="DivsDownload"> 
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/dWjrvcT/time-line.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
        </div>
    );
}

export {About};