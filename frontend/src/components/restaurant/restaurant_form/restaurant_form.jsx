import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
import './restaurant_form.scss';

class RestaurantForm extends React.Component {

    render() {
        return (
            <div className="ri-form-main">
                <NavBar />
                <div className="ri-form-container">
                    <div className="ri-form-subcontainer">
                        <div className="ri-form-main-left">
                            <h1>add a Restaurant</h1>
                        </div>
                        <div className="ri-form-main-right">

                        </div>
                    </div>
                    <footer className="ri-form-footer">
                        <div className="footer-links-ri-form">
                            <a href="https://github.com/LeeXiuLong/Taste">Github</a>
                        </div>
                        <div className="copyright-ri-form">
                            Copyright &copy; 2020 Junipers
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
};

export default RestaurantForm;