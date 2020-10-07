import React from 'react';
import NavBar from '../nav/navbar_container';
import './home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className="home-main">
                <NavBar />
                <div className="home-container">
                    <div className="home-subcontainer">
                        <div className="home-content-container">
                            <div className="header-left-container">
                                <h3> see what people are tasting </h3>
                            </div>
                            <div className="home-greeting">
                                <p> welcome {this.props.currentUser.name}!</p>
                            </div>
                        </div>
                        <div className="header-container-home"></div>
                        <footer className="splash-footer">
                            <div className="footer-links-splash">
                                <a href="https://github.com/LeeXiuLong/Taste">Github</a>
                            </div>
                            <div className="copyright-splash">
                                Copyright &copy; 2020 Junipers
                        </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;