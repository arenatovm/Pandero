import React from "react";

function Footer() {
    return (
        <footer>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <a className="navbar-brand" href="./"><img src="../public/images/Panderos.PNG"  width="60"height="40" alt=""/></a>
                    <a className="nav-item nav-link botones" href="./WhoAreWe.html">Corporate Information</a>
                    <a className="nav-item nav-link botones" href="./FAQ.html">FAQ</a>
                    <a className="nav-item nav-link botones" href="./Career.html">Career</a>
                    
                    {/* chat */}

                    <div id="chat">
                        <button className="open-button" onclick="openForm()">Chat</button>

                        <div className="chat-popup" id="myForm">
                            <form action="/action_page.php" className="form-container">
                                <h1>Chat</h1>
                                <label for="msg"><b>Message</b></label>
                                <textarea placeholder="Type message.." name="msg" required></textarea>

                                <button type="submit" className="btn">Send</button>
                                <button type="button" className="btn cancel" onclick="closeForm()">Close</button>
                            </form>
                        </div>
                    </div>
                    
        </nav>
    </footer>
            );
          }
          
          export default Footer;
