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
                <h1>Unnamed lander game</h1>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                <br/>
                <br/>
                <Link className="DownloadHome" to="/download">
                <button id="button">Download</button>
                </Link>
            </div>
        </div>
    );
}

export {Home};