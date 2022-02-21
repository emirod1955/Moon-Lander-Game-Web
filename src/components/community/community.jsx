//Import React
import React from "react";
import { Link} from "react-router-dom";

//Import styles
import './Community.css';

const Community = () =>{
    return(
        <div className="community">
            <div className="feedbackBox">

                    <Link to="/contact" className="suggestionBoxContainer">  
                    {/*<div className="bugBoxContainer">*/}
                        <img id="imagenesFeddback" src="https://i.ibb.co/P4C8GQz/bug-2.png" alt="" />
                        <p id="letraFeedback">Report a Bug here</p>
                    {/*</div>*/}</Link>

                    <Link to="/contact" className="suggestionBoxContainer">  
                    {/*<div className="suggestionBoxContainer">*/}
                        <img id="imagenesFeddback" src="https://i.ibb.co/QcnQfrc/Idea-2.png" alt="" />
                        <p id="letraFeedback">Deposit a Suggestions</p>
                    {/*</div>*/}</Link>
                </div>
        </div>
    );
}

export {Community};

