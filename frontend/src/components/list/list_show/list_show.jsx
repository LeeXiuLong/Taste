import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
import './list_show.scss';
import { IoIosStar } from 'react-icons/io';

class ListShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemoveReview = this.handleRemoveReview.bind(this)
    }
   
    componentDidMount() {
        this.props.fetchListReviews();
        this.props.fetchCurrentList()
        .then(list => {
            this.props.fetchListReviews(list.currentList.data._id)
        })

    }

    handleRemoveReview(reviewId) {
        this.props.removeReviewFromList(this.props.list._id, reviewId)
            .then(this.props.deleteReview(reviewId))
            .then(() => {
                this.props.fetchCurrentList();
            })
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.reviews !== prevProps.reviews){
    //         this.props.fetchCurrentList()
    //             .then(list => {
    //                 this.props.fetchListReviews(list.currentList.data._id);
    //             });
    //     }
    // }

    render() {

        let reviewArr;
        let allReviews = [];
    
        if (!this.props.reviews || !this.props.list.restaurantReviews) return null;
        if (this.props.reviews && this.props.list) {
            reviewArr = Object.values(this.props.reviews).filter(review => {
                return this.props.list.restaurantReviews.some(listReview => {
                    return review._id === listReview._id;
                })
            })


            let restaurantReviews = reviewArr.map(review => {
                return <div className="ls-review-container" key={review._id}>
                    <button onClick={() => this.handleRemoveReview(review._id)}>X</button>
                    <div className="review-sub-container">
                        <Link to={`/myreviews/${review._id}`} style={{ textDecoration: 'none' }}>
                            <h1 className="review-name">{review.name}</h1>
                        </Link>
                        <h2 className="notes">{review.notes}</h2>
                            <div className="rating">
                                <IoIosStar /> 
                                <h2 className="rating-text">{review.rating}/10</h2> 
                            </div>
                    </div>
                </div>
            })

            for (let i = 0; i < restaurantReviews.length; i += 2) {
                allReviews.push(<div key={i} className="row">{restaurantReviews.slice(i, i + 2)}</div>)
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