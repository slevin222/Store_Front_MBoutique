import React from 'react';
import '../assets/css/allPages.css';



export default props => {
    return (
        <footer className="page-footer z-depth-2">
            <div className="row footerRow">
                <div className="col l4 m4 s12 footerLeft center-align">
                    <p className="order"><i className="fa fa-envelope fa-lg"></i> order@mboutique.com</p>
                </div>
                <div className="col l4 m4 s12 footerMiddle center-align">
                    <p className="phone"> <i className="fa fa-phone-square fa-lg"></i> 949.690.1076</p>
                </div>
                <div className="col l4 m4 s12 footerRight center-align">
                    <p className="facebook"><i className="fa fa-twitter fa-lg"></i> <i className="fa fa-facebook-official fa-lg"></i> Follow us</p>
                </div>
                <div className="col s12 center-align copyR">
                    <p className="copyR">COPYRIGHT @ 2017 MBOUTIQUE. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    )
}