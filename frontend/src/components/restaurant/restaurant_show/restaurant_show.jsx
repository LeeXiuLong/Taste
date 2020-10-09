import React from 'react';
import NavBar from '../../nav/navbar_container';
import './restaurant_show.scss'
import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';


class RestaurantShow extends React.Component {

    componentDidMount() {
        this.props.fetchCurrentReview();
        this.props.fetchMenuItems(this.props.match.params.reviewId);
    }

    render() {

        let menuArr;
        let allMenuItems = [];

        if (!this.props.menuItems) return null;
        if (!this.props.review) return null;

        if (this.props.menuItems) {
            menuArr = Object.values(this.props.menuItems)

            let menuItems = menuArr.map(item => {
                return <div className="mi-container">
                    <h1 className="item-name">{item.name}</h1>
                    <h3 className="item-rating">{item.rating}/10  <IoIosStar /></h3>
                    <p className="item-notes">{item.notes}</p>
                </div>

            })

            for (let i = 0; i < menuItems.length; i += 5) {
                allMenuItems.push(<div className="row">{menuItems.slice(i, i + 5)}</div>)
            }
        }


        return (
            <div className="rs-main">
                <NavBar />
                <div className="rs-container">
                    <div className="rs-subcontainer">
                        <div className="rs-name">
                            <h1>{this.props.review.name}</h1>
                            <button className="list-main-button" onClick={() => this.props.openModal('restaurantMenuItem')}>+</button>
                        </div>
                        <div>
                            {allMenuItems}
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
            </div>
        )
    }
};

export default RestaurantShow;