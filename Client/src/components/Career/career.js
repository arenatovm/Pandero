import React from 'react';

function Careers() {

    const pandastyle = {
        width: "360px",
        height:"260px" 
    }
    return (
    <div className="jumbotron" >
        <div className="row">
            <div className="col-8">
                <h1 className="display-4">Join Our Growing Community</h1>
                <p className="lead col-8">Technology is part of our lives and it could be part of your career. By joining our talent community, you will be able to explore career opportunities and learn more about Best Buy.</p>
                <hr className="my-4" />
                <p>You can be yourself here!</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
            </div>
            <div className="col-4">
                <img src="../images/panda-typing.jpg"  alt="panda img" />
            </div>
        </div>

        <div className="jumbotron">
            <div className="row">
                <div className="col-4">
                    <img src="../images/panda-at-work.jpg" style={pandastyle} alt="#" />
                </div>
                <div className="col-8">
                    <h1 className="display-4">Explore Careers!</h1>
                    <p className="lead">Interested in finding out more about job opportunities in a company considered to be the leading provider of technology products, services and solutions? Discover your career at Best Buy! We offer employees exciting work in a fun, dynamic environment that encourages learning and growth.</p>
                    <hr className="my-4" />
                    <p>We value everyone’s talents, life experiences, beliefs and backgrounds.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Explore Careers</a>

                </div>
            </div>





        </div>
    </div>
        );
}

export default Careers;