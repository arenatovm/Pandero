import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Main from "./components/Main/index";
import HowItWorks from "./components/HowItWorks/index";
import WhoAreWe from "./components/WhoAreWe/index";
import ContactUs from "./components/ContactUs/index";
import FAQ from "./components/FAQ/FAQ";
import Careers from "./components/Career/career";
import Create from "./components/Login/Create";
import Profile from "./components/Login/Profile";


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Container">
          <Route exact path="/" component={Main} />
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/whoarewe" component={WhoAreWe} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/careers" component={Careers} />
{/* 
          <Switch>
            <PrivateRoute exact path="/createprofile" component={Create} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
