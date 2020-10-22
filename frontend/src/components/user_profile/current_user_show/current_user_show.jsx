import React from 'react';
import NavBar from '../../nav/navbar_container';
import { Link } from 'react-router-dom';
import '../user_show.scss';

class CurrentUserShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        // this.props.fetchCurrentUser(this.props.currentUser.id);
    }

    handleFollow(userId) {
        this.props.createFollow(userId);
    }

    handleUnfollow(userId) {
        this.props.deleteFollow(userId)
    }

    render() {
        const { currentUser, user } = this.props;
        if (!user) return null;
        let name, id, followers, following, follow, unfollow;
        let followersArr = [];

        if (user.data) {
            name = user.data.name;
            id = user.data._id;
            followers = user.data.followers.length;
            following = user.data.following.length;
            followersArr = ((user.data.followers).map(follower => (Object.values(follower)[0])));
            let isFollowing = followersArr.includes(currentUser.id)

            if (isFollowing) {
                unfollow = (
                    <div>
                        <button onClick={() => this.handleUnfollow(id)}>unfollow</button>
                    </div>
                )
            } else {
                follow = (
                    <div>
                        <button onClick={() => this.handleFollow(id)}>follow</button>
                    </div>
                )
            }
        }

        return (
            <div>
                <NavBar />
                <div className="user-show-container">
                    <div className="user-show-subcontainer">
                        <div className='us-header-container'>
                            <div className="us-top-left-container">
                                <div className="follow-button-container">
                                <h1>{name}</h1>
                                    {follow}{unfollow}
                                </div>
                                <div className="imgbg-us">
                                </div>
                            </div>
                            <div className="us-insights">
                                <ul className="insights-ul-us">
                                    <li className="following-us-insights">
                                        <p>following</p>
                                        <h1>{following}</h1>
                                    </li>
                                    <li className="following-us-insights">
                                        <p>followers</p>
                                        <h1>{followers}</h1>
                                    </li>
                                </ul>
                                <br/>
                                <div className="user-links-containter">
                                    <Link to={`/${id}/lists`} style={{ textDecoration: 'none' }}><h3>lists</h3></Link>
                                    <br />
                                    <Link to={`/${id}/restaurants`} style={{ textDecoration: 'none' }}><h3>restaurants</h3></Link>
                                </div>
                            </div>

                            <div className="bottom-containter">
                                <div className="recs-header">
                                </div>
                                <div className="recs-container">

                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="cus-footer">
                        <div className="footer-links-cus">
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
            </div >
        )
    }
}

export default CurrentUserShow;