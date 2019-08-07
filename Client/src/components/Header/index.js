import React from "react";
import Panderos from ".../public/images/Panderos.PNG";
import panda from ".../public/images/panda.png"

function Header() {
    return (

        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="./"><img src={Panderos} alt="Panderos" width="200" height="80" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="./HowItWorks.html">How it works <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="./WhoAreWe.html">Who are we</a>
                        <a className="nav-item nav-link" href="./CreateForm.html">Get Started</a>
                        <a className="nav-item nav-link" href="./Contactus.html">Contact Us</a>

                        {/* <!-- social  media --> */}
                        <div className="redes">
                            <ul className="nav d-flex justify-content-end">
                                <li> <a href="https://www.facebook.com/veco.vera" className="fa fa-facebook"></a></li>
                                <li> <a href="https://twitter.com/arenatovm" className="fa fa-twitter"></a></li>
                                <li><a href="https://www.youtube.com/channel/UCzfHtHC-hg9vab7sEtx-vug?view_as=subscriber" className="fa fa-youtube"></a></li>
                                <li><a href="https://www.instagram.com/arenatovm/" className="fa fa-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <!-- login nav --> */}
            <nav className="navbar navbar-light " id="loginvar">
                <form className="form-inline d-flex justify-content-center">

                    <img src={panda} alt="panda" id="pandicon" />
                    <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Search"/>
                        <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>

                </form>
            </nav>

        </header>

                );
            }
            
export default Header;