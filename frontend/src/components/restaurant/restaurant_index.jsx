import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import './restaurant_index.scss';
import { IoIosStar } from 'react-icons/io';

class RestaurantIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserReviews(this.props.currentUser.id)
    }

    render() {

        let reviewsArr;
        let allReviews = [];

        if (!this.props.reviews) return null;

        if (this.props.reviews.data) {
            reviewsArr = Object.values(this.props.reviews.data)


            let reviews = reviewsArr.map(review => {
                return <div className="list-container" key={review.id}>
                    <Link to={`/reviews/${review.id}`}><p>{review.name} {review.rating}/10 {<IoIosStar/>}</p>
                         <p>{review.notes}</p>
                    </Link>
                </div>

            })

            for (let i = 0; i < reviews.length; i += 4) {
                allReviews.push(<div key={i} className="row">{reviews.slice(i, i + 4)}</div>)
            }
        } 

        return (
            <div className="ri-main">
                <NavBar />
                <div className="ri-container">
                    <div className="ri-subcontainer">
                        <div className="ri-main-left">
                            <h1>your restaurants</h1>
                            <button className="list-main-button" onClick={() => this.props.openModal('restaurantFormDefault')}>+</button>
                        </div>
                        <div className="ri-main-right">
                            {allReviews}
                        </div>
                    </div>
                    <footer className="ri-footer">
                        <div className="footer-links-ri">
                            <a href="https://github.com/LeeXiuLong/Taste">Repo</a>
                            <ul className="footer-git-links">
                                <li><a href="https://github.com/LeeXiuLong/">Jourdan Ooi</a></li>
                                <li><a href="https://github.com/justinchore/">Justin Cho</a></li>
                                <li><a href="https://github.com/thisisnahid/">Nahid Siddiqui</a></li>
                                <li><a href="https://github.com/ellisPae/">Ellis Pae</a></li>
                            </ul>
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