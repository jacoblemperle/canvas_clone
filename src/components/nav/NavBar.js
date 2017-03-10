import React, { Component } from 'react';
import './../../styles/NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div className="navbar" >
                <img className="nav-image" src="https://instructure-uploads-2.s3.amazonaws.com/account_140000000000016/attachments/67641187/Nav%20Logo.png?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1924878923&Signature=EHocXlPnEKwtccjBKGY3kEMjNDA%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000%2C%20public&response-expires=473364000" alt=""/>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                <p>Account</p>
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <p>Dashboard</p>
                <i className="fa fa-book" aria-hidden="true"></i>
                <p>Courses</p>
                <i className="fa fa-users" aria-hidden="true"></i>
                <p>Groups</p>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <p>Calendars</p>
                <i className="fa fa-inbox" aria-hidden="true"></i>
                <p>Inboxs</p>
                <i className="fa fa-question" aria-hidden="true"></i>
                <p>Help</p>
            </div>
        );
    }
}

export default NavBar;
