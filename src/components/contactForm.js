import React from 'react';
import '../assets/css/contactForm.css';

export default props => {
    return (
        <div className="row contactForm1">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="first_name2" type="text" className="validate" />
                        <label className="active" form="first_name2">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="text" className="validate" />
                        <label className="active" form="emial">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="text" className="validate" />
                        <label className="active" form="phone">Phone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="text" className="validate" />
                        <label className="active" form="subject">Subject</label>
                    </div>
                </div>
            </form>
        </div>
    );
}