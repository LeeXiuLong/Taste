import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import './restaurant_index.scss';

class RestaurantIndex extends React.Component {

    render() {
        return (
            <div className="ri-main">
                <NavBar />
                <div className="ri-container">
                    <div className="ri-subcontainer">
                        <div className="ri-main-left">
                            <h1>Restaurant Index Page</h1>
                            <Link to="/add-restaurant"><h3 className="rest-main-h3">+</h3></Link>
                        </div>
                        <div className="ri-main-right">

                        </div>
                    </div>
                    <footer className="ri-footer">
                        <div className="footer-links-ri">
                            <a href="https://github.com/LeeXiuLong/Taste">Github</a>
                        </div>
                        <div className="copyright-ri">
                            Copyright &copy; 2020 Junipers
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
};

export default RestaurantIndex;