import React from 'react';
import NavBar from '../nav/navbar_container';
import './home.scss';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchReviews()
    }

    render() {
        let r1, r1d, r2, r2d, r3, r3d, r4, r4d, reviewsArr;
        const { reviews } = this.props;
        if (!reviews) return null;
        
        if (reviews.data) {
            reviewsArr = Object.values(reviews.data)
            if (reviewsArr.length) {
            r1 = reviewsArr[0].name; r1d = reviewsArr[0].notes; 
            r2 = reviewsArr[1].name; r2d = reviewsArr[1].notes;
            r3 = reviewsArr[2].name; r3d = reviewsArr[2].notes;
            r4 = reviewsArr[3].name; r4d = reviewsArr[3].notes;
            }
        } 

        return (
            <div className="home-main">
                <NavBar />
                <div className="home-container">
                    <div className="home-subcontainer">
                        <div className="home-content-container">
                            <div className="header-left-container">
                                <h3> recent reviews </h3>
                                <div className="reviews-container-home">
                                    <ul className="rr-home"> 
                                        <div>
                                            <li>{r1}</li>
                                            <p>{r1d}</p>
                                        </div>
                                        <div>
                                            <li>{r2}</li>
                                            <p>{r2d}</p>
                                        </div>
                                        <div>
                                            <li>{r3}</li>
                                            <p>{r3d}</p>
                                        </div>
                                        <div>
                                            <li>{r4}</li>
                                            <p>{r4d}</p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="home-greeting">
                                <p> welcome {this.props.currentUser.name}!</p>
                                <div className="gif-container">
                                    <img src="https://i.gifer.com/4SS.gif" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="header-container-home"></div>
                        <footer className="splash-footer">
                            <div className="footer-links-splash">
                                <a href="https://github.com/LeeXiuLong/Taste">Repo</a>
                                <ul className="footer-git-links">
                                    <li><a href="https://github.com/LeeXiuLong/">Jourdan Ooi</a></li>
                                    <li><a href="https://github.com/justinchore/">Justin Cho</a></li>
                                    <li><a href="https://github.com/thisisnahid/">Nahid Siddiqui</a></li>
                                    <li><a href="https://github.com/ellisPae/">Ellis Pae</a></li>
                                </ul>
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