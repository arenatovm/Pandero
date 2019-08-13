import React from 'react';


function FAQ (){
  var divStyle = { backgroundImage: "url('../images/panda-questions.PNG')"};
    return (
        <div className="jumbotron jumbotron-fluid" style={divStyle}>
        
            <div className="container" id="faq">
              <h1 className="display-4">F.A.Q.</h1>
              <p className="lead">Materialize this questions!</p> 
              <p className="lead">What is a Pandero?</p>
              <p className="lead">Who is a Panda?</p>
              <p className="lead">Who is a Panda?</p>
              <p className="lead">Who is a Panda?</p>
              <p className="lead">How much is the commission? </p>
              <p className="lead">MATERIALIZE THIS QUESTIONS!</p>
              <p className="lead">MATERIALIZE THIS QUESTIONS!</p>
              <p className="lead">MATERIALIZE THIS QUESTIONS!</p>
            </div>
          </div>

    );
}

export default FAQ;