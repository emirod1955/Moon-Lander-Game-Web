//Import React
import React from "react";

//Import styles
import '../styles/styles.css';

function Resources (){
    return(
        <div className="Info">
            <div className="StarshipBox">
                    <div className="DivsDownload"> 
                    <div className="StarshipText">
                            <h1>Starship module parameters</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://sourceb.in/tgDw4tvosN" target="_blank" rel="noreferrer">Link</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Starship_HLS_Moon_landing.jpg/1200px-Starship_HLS_Moon_landing.jpg" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                <div className="SimulatorCode">
                    <div className="DivsDownload"> 
                    <div className="SimulatorCodeText">
                            <h1>Simulator code</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://github.com/veinad/Moon-Lander" target="_blank" rel="noreferrer">Github link</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://cdn-icons-png.flaticon.com/512/5080/5080026.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                <div className="StarshipBox">
                    <div className="DivsDownload"> 
                    <div className="StarshipText">
                            <h1>Simulator web site code</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://github.com/emirod1955/Moon-Lander-Game-Web" target="_blank" rel="noreferrer">Github link</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://cdn-icons-png.flaticon.com/512/5673/5673446.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                <div className="RaptorBox">
                    <div className="DivsDownload"> 
                    <div className="RaptorText">
                            <h1>Raptor Sea Level engine design</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://drive.google.com/drive/folders/1-A20QWax0unZANl5pKH1q77vEQGXI2dD?usp=sharing" target="_blank" rel="noreferrer">Blender file</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/5r8dX3H/raptor-nivel-del-mar.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
                <div className="RaptorBox">
                    <div className="DivsDownload"> 
                    <div className="RaptorText">
                            <h1>Raptor Vacuum engine design</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://drive.google.com/drive/folders/13YT2Wd_RNMjqQbR0l-4KiDvaPDnnRM6c?usp=sharing" target="_blank" rel="noreferrer">Blender file</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/L1HfdHy/raptor-de-vacio.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>

                <div className="RaptorBox">
                    <div className="DivsDownload"> 
                    <div className="RaptorText">
                            <h1>Starship design</h1>
                            <br />
                            <h2><a id="LinkDecoration" href="https://drive.google.com/drive/folders/1TqmcAjWNgIZmvTVk9lv7jnsmUMVs7fNk?usp=sharing" target="_blank" rel="noreferrer">Blender file</a></h2>
                        </div>
                        <div className="StarshipImageBox">
                            <img id="StarshipImage" src="https://i.ibb.co/x2cL0kB/Starship.png" alt="Rocket IMG"/>   
                        </div>
                    </div>
                </div>
        </div>
    );
}

export {Resources};