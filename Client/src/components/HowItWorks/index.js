import React from 'react';
import './index.css';

function HowItWorks (){
    const divstyle = {textalign: "center"};
    return(
<div className="containerWorks">
        <div className="row">
            <div className="col-sm" style={divstyle}>
                <h1>Create a Group!</h1>
                <p>
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use </p>
                <img src="../images/alot-pandas.png" width="350" height="auto"/>
                <button type="button" className="btn btn-primary" >Get Started</button>

            </div>
            <div className="col-sm" style={divstyle}>
                <h1>Set a Goal!</h1>
                <p>Talk each other and set a saving goal!. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point of using Lorem
                    
                    page editors now use </p>
                <img src="../images/panda-finish-lane.jpg" width="350" height="250"/>
            </div>
            <div className="col-sm">
                <h1 className="set" style={divstyle}>Set the Rules!</h1>
                <ul>
                    <li>Set how many pandas in the group</li>
                    <li>Select the goal to be save</li>
                    <li>Select the input date</li>
                </ul>
                <img src="../images/panda-teacher.jpg" width="350" height="300" alt=""/>
            </div>
        </div>
    </div>

    );
}

export default HowItWorks;