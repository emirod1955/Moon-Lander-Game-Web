//Import React
import React from "react";

//Import styles
import './Community.css';

const Community = () =>{
    return(
        <div className="community">
            <div className="feedbackBox">
                <a href="https://2021.spaceappschallenge.org/challenges/statements/planetary-lander-video-game/teams/unnamed-1/project"><div className="bugBox">
                    <div className="bugBoxContainer">
                        <img id="imagenesFeddback" src="https://i.ibb.co/P4C8GQz/bug-2.png" alt="" />
                        <p id="letraFeedback">Report a Bug here</p>
                    </div>
                </div></a>
                <a href="https://2021.spaceappschallenge.org/challenges/statements/planetary-lander-video-game/teams/unnamed-1/project"><div className="suggestionBox">
                    <div className="suggestionBoxContainer">
                        <img id="imagenesFeddback" src="https://i.ibb.co/QcnQfrc/Idea-2.png" alt="" />
                        <p id="letraFeedback">Deposit a Suggestions</p>
                    </div>
                </div></a>
            </div>
        </div>
    );
}

export {Community};

