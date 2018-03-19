import React from 'react';
import '../assets/css/allPages.css';



export default props => {
    return (
        <footer className="page-footer z-depth-2">
            <div className="row footerRow">
                <div className="col l4 s12 footerLeft center-align">
                    <p><i className="fa fa-envelope fa-lg"></i> order@mboutique.com</p>
                </div>
                <div className="col l4 s12 footerMiddle center-align">
                    <h6 className="phone"> <i className="fa fa-phone-square fa-lg"></i> 949.900.3111</h6>
                </div>
                <div className="col l4 s12 footerRight center-align">
                    <p><i className="fa fa-twitter fa-lg"></i> <i className="fa fa-facebook-official fa-lg"></i> Follow us</p>
                </div>
                <div className="col s12 center-align">
                    <p className="copyR">COPYRIGHT @ 2017 MBOUTIQUE. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    )
}