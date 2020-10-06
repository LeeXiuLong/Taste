import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaListUl } from 'react-icons/fa';
import './navbar.scss'
import './T.png'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="nav-buttons-container">
                    <ul className="left-links-nav">
                        <div className="logo-navbar-container">
                            <li className="logo-png"></li>
                        </div>
                        <li><FaListUl /></li>
                    </ul>
                    <ul className="nav-mainlogo-container">
                        <li className="nav-mainlogo"></li>
                    </ul>
                    <ul className="right-links-nav">
                        <Link to="/users"><li><FaUser /></li></Link>
                        <li><button onClick={(e) => this.logoutUser(e)}>log out</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;