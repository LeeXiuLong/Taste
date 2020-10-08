import React from 'react';
import "./splash.scss"

class Splash extends React.Component {

    render() {

        return (
            <div className="splash-container">
                <div className="splash-subcontainer">
                    <div className="header-container">
                        <div className="session-buttons-container">
                            <button
                                className="login-button"
                                onClick={() => this.props.openModal("login")}>
                                log in
                            </button>
                            <button
                                className="signup-button"
                                onClick={() => this.props.openModal("signup")}>
                                sign up
                            </button>
                        </div>
                        <div className="taste-img-container">
                        </div>
                    </div>
                    <footer className="splash-footer">
                        <div className="footer-links-splash">
                            <a href="https://github.com/LeeXiuLong/Taste">Repo</a>
                            <ul className="footer-git-links">
                                <li><a href="https://github.com/LeeXiuLong/">Jourdan Ooi</a></li>
                                <li><a href="https://github.com/justinchore/">Justin Cho</a></li>
                                <li><a href="https://github.com/thisisnahid/">Nahid Siddiqui</a></li>
                                <li><a href="https://github.com/ellisPae/">Ellis Pae</a></li>
                            </ul>
                        </div>
                        <div className="copyright-splash">
                            Copyright &copy; 2020 Junipers
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Splash;