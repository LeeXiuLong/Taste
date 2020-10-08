import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
// import './list_show.scss';

class ListShow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    //
    componentDidMount() {
        this.props.fetchCurrentList().then(list => this.props.fetchListReviews(list.currentList.data._id));
    }

    // componentDidUpdate(prevProps){
    //  if(prevProps !== this.props){
    //     this.props.fetchListReviews(this.props.list._id)
    //  }
    // }


    render() {

        let reviewArr;
        let allReviews = [];

        if (!this.props.reviews) return null;

        if (this.props.reviews.data) {
            reviewArr = Object.values(this.props.reviews.data)


            let restaurantReviews = reviewArr.map(review => {
                return <div className="review-container">
                    <Link to={`/review/${review.id}`}><p>{review.name}</p></Link>
                </div>

            })

            for (let i = 0; i < restaurantReviews.length; i += 5) {
                allReviews.push(<div className="row">{restaurantReviews.slice(i, i + 5)}</div>)
                console.log(allReviews)
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