import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import './user_show.scss'

class UserShow extends React.Component {

    // componentDidMount() {
    //     this.props.fetchUsers()
    // }

    render() {
        const { currentUser } = this.props;
        console.log(currentUser)
        return (
            <div>
                <NavBar />
                <div className="user-show-container">
                    <div className="user-show-subcontainer">
                        <div className='us-header-container'>
                            <div className="us-top-left-container">
                                <h1>{currentUser.name}</h1>
                                <div className="user-links-containter">
                                    <Link to={`/${currentUser.id}/lists`} style={{ textDecoration: 'none' }}><h3>lists</h3></Link>
                                    <br/>
                                    <Link to={`/${currentUser.id}/restaurants`} style={{ textDecoration: 'none' }}><h3>restaurants</h3></Link>
                                </div>
                                <div className="imgbg-us">

                                </div>
                            </div>
                            <div className="us-insights">
                                <ul className="insights-ul-us">
                                    <li className="following-us-insights">
                                        <p>following</p>
                                        <h1>135</h1>
                                    </li>
                                    <li className="following-us-insights">
                                        <p>followers</p>
                                        <h1>110</h1>
                                    </li>
                                </ul>
                            </div>

                                <div className="bottom-containter">
                                    <div className="recs-header">
                                    </div>
                                    <div className="recs-container">

                                    </div>
                                </div>
                            </div>
                    </div>
                        <footer className="us-footer">
                            <div className="footer-links-us">
                                <a href="https://github.com/LeeXiuLong/Taste">Repo</a>
                                <ul className="footer-git-links">
                                    <li><a href="https://github.com/LeeXiuLong/">Jourdan Ooi</a></li>
                                    <li><a href="https://github.com/justinchore/">Justin Cho</a></li>
                                    <li><a href="https://github.com/thisisnahid/">Nahid Siddiqui</a></li>
                                    <li><a href="https://github.com/ellisPae/">Ellis Pae</a></li>
                                </ul>
                            </div>
                            <div className="copyright-us">
                                Copyright &copy; 2020 Junipers
                            </div>
                        </footer>
                </div>
            </div >
        )
    }
}

export default UserShow;