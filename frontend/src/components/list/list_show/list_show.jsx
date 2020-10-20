import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
import './list_show.scss';
import { IoIosStar } from 'react-icons/io';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

class ListShow extends React.Component {
   
    componentDidMount() {
        // this.props.fetchListReviews();
        this.props.fetchCurrentList()
        .then(list => this.props.fetchListReviews(list.currentList.data._id))
    }

    render() {

        let reviewArr;
        let allReviews = [];
    
        if (!this.props.reviews) return null;

        if (this.props.reviews && this.props.list) {
            reviewArr = Object.values(this.props.reviews).filter(review => {
                return this.props.list.restaurantReviews.some(listReview => {
                    return review._id === listReview._id;
                })
            })
            
            let restaurantReviews = reviewArr.map(review => {
                return <div className="review-container" key={review._id}>
                    <Link to={`/reviews/${review._id}`} style={{ textDecoration: 'none' }}>
                        <h1 className="review-name">{review.name}</h1>
                    </Link>
                    <h2 className="notes">{review.notes}</h2>
                    <div className="rating"><IoIosStar /> <h2 className="rating-text">{review.rating}/10</h2> </div>
                </div>
            })

            for (let i = 0; i < restaurantReviews.length; i += 5) {
                allReviews.push(<div key={restaurantReviews[i]._id} className="row">{restaurantReviews.slice(i, i + 5)}</div>)
            }
        } 

        return (
            <div className="list-show-main">
                <NavBar />
                <div className="list-show-container">
                    <div className="list-show-subcontainer">
                        <div className="ls-list-name">
                            <h1>{this.props.list.name}</h1>
                            <button className="list-main-button" onClick={() => this.props.openModal('restaurantFormList')}>+</button>
                        </div>
                        <div>
                             {allReviews}
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

export default ListShow;