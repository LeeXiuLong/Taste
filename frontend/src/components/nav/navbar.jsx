import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaListUl } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';
import Search from "./search";
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
                       <Link to="/home"><div className="logo-navbar-container">
                            <li className="logo-png"></li>
                        </div></Link>
                        <Link to={`/mylists`}><li><FaListUl /></li></Link>
                        <Link to={`/myrestaurants`}><li>< ImSpoonKnife /></li></Link>
                        <div className="search-nav">
                            <Search fetchUser={this.props.fetchUser}/>
                        </div>
                    </ul>
                    <Link to="/home"> <ul className="nav-mainlogo-container">
                        <li className="nav-mainlogo"></li>
                    </ul></Link>
                    <ul className="right-links-nav">
                        <Link to={`/profile`}><li><FaUser /></li></Link>
                        <li><button onClick={(e) => this.logoutUser(e)}>log out</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;