//Import React
import React from "react";

//Import styles
import './Footer.css';

function Footer(){
return(
        <div className="footer">
            <div className="content">Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> and <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div className="content">Developed by "Unnamed." team in Uruguay for Space Apps Challenge 2021</div>
            <div className="socialMedia">
                <img src="https://i.ibb.co/m9S0dwb/facebook.png" alt="Facebook" />
                <img src="https://i.ibb.co/QQkchq3/twitter.png" alt="Twitter" />
                <img src="https://i.ibb.co/PN2xQTF/linkedin.png" alt="Linkedin" />
                <img src="https://i.ibb.co/tzSHs1P/instagram.png" alt="Instagram" />
                <img src="https://i.ibb.co/b2XR5cw/youtube.png" alt="Youtube" />
            </div>
        </div>
    );
}

export {Footer};