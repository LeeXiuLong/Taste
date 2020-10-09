import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
import './list_show.scss';

class ListShow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    //
    componentDidMount() {
        this.props.fetchReviews();
        this.props.fetchCurrentList()
        .then(list => this.props.fetchListReviews(list.currentList.data._id))
        // this.props.fetchEachReview(this.props.list.restaurantReviews)
        // console.log(this.props.list.restaurantReviews)
    }

    // componentDidUpdate(prevProps){
    //  if(prevProps !== this.props){
    //     this.props.fetchListReviews(this.props.list._id)
    //  }
    // }

    // fetchReview(reviewId) {
    //     let reviewsArr, allRArr = [];
    //     this.props.fetchReview(reviewId);
    //     if (this.props.reviews.data) {
    //         reviewsArr = Object.values(this.props.reviews.data)
    //         console.log(allRArr)

    //         reviewsArr.map(review => {
    //             allRArr.push(this.props.fetchReview(review._id))
    //         })

    //     } 
    // }

    render() {

        let reviewArr;
        let allReviews = [];
    
        if (!this.props.reviews) return null;

        if (this.props.reviews.data) {
            reviewArr = Object.values(this.props.reviews.data)

            let restaurantReviews = reviewArr.map(review => {
                    // review1 = this.fetchReview(review._id);
                    // console.log(review1)
                return <div className="review-container">
                    <Link to={`/reviews/${review._id}`} style={{ textDecoration: 'none' }}>
                        <p>{review._id}</p>
                    </Link>
                </div>

            })

            for (let i = 0; i < restaurantReviews.length; i += 5) {
                allReviews.push(<div key={i} className="row">{restaurantReviews.slice(i, i + 5)}</div>)
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