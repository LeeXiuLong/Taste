import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
import '../restaurant_index.scss';
import { IoIosStar } from 'react-icons/io';

class UserRestaurantIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUserReviews(this.props.user.data._id)
    }

    render() {

        let reviewsArr;
        let allReviews = [];

        if (!this.props.reviews) return null;

        if (this.props.reviews) {
            reviewsArr = Object.values(this.props.reviews)

            let reviews = reviewsArr.map(review => {
                return <div className="review-container" key={review._id}>
                    <Link to={`/reviews/${review._id}`} style={{ textDecoration: 'none' }}>
                        <h1 className="review-name">{review.name}</h1>
                    </Link>
                    <h2 className="notes">{review.notes}</h2>
                    <div className="right-review-container">
                        <div className="rating"><IoIosStar /> <h2 className="rating-text">{review.rating}/10</h2>
                        </div>
                    </div>
                </div>

            })

            for (let i = 0; i < reviews.length; i += 2) {
                allReviews.push(<div key={i} className="row">{reviews.slice(i, i + 2)}</div>)
            }
        }

        return (
            <div className="ri-main">
                <NavBar />
                <div className="ri-container">
                    <div className="ri-subcontainer">
                        <div className="ri-top">
                            <h1>{`${this.props.user.data.name}`}'s restaurants</h1>
                        </div>
                        <div className="ri-main-left">
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

export default UserRestaurantIndex;