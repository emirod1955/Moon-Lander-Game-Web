//Import React
import React from "react";
import { Link } from 'react-router-dom'


//Import styles
import '../styles/styles.css';


function Download(){
    return(          
            <div className="download">
                

                <div className="MacOSBox">
                    <div className="DivsDownload"> 
                        <div className="MacOSImageBox">
                            <img id="AppleImage" src="https://camo.githubusercontent.com/6c1b3c0aee1fbf3885dc250f490e5fb2bb1ba1e5b4a7afa24a5547126945bd4a/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136313531372f73637265656e73686f74732f373839363037362f6170706c652d6c6f676f2d616e696d6174696f6e2e676966" alt="Rocket IMG"/>   
                        </div>

                        <div className="MacOSText">
                            <h1>Download for MacOS</h1>
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
                                <button id="MacOSButton">Download now</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="WindowsBox">
                    <div className="DivsDownload"> 
                        <div className="WindowsImageBox">
                            <img id="WindowsImage" src="https://itblogsogeti.files.wordpress.com/2015/08/windows_10.png" alt="Rocket IMG"/>   
                        </div>

                        <div className="WindowsText">
                            <h1>Download for Windows</h1>
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
                                <button id="WindowsButton">Download now</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="LinuxBox">
                    <div className="DivsDownload"> 
                        <div className="LinuxImageBox">
                            <img id="LinuxImage" src="https://elmegafono.net/wp-content/uploads/2019/06/409-linux.png" alt="Rocket IMG"/>   
                        </div>

                        <div className="MacOSText">
                            <h1>Download for Linux</h1>
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
                                <button id="LinuxButton">Download now</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            
    );
}

export {Download};