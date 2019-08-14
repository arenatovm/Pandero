import React from 'react';

function ContactUs() {

    const divstyle = {width:"40%"};
    return (
        <div className="container mt-5">
            <div className="jumbotron jumbotron-fluid">
                <form id="contactUs">
                    <div className="container" style={divstyle}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Suscribe for updates and promos
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Contact Us</button>
                    </div>
                </form>


            </div>
        </div>

    );  
}
export default ContactUs; 