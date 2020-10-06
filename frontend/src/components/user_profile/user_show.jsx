import React from 'react';
import NavBar from '../nav/navbar_container';
import './user_show.scss'

class UserShow extends React.Component {

    render() {
        let list1, list2, list3;

        list1 = (
            <div className="list-container">
                <p>KBBQ Spots</p>
            </div>
        )

        list2 = (
            <div className="list-container">
                <p>Ice Cream</p>
            </div>
        )

        list3 = (
            <div className="list-container">
                <p>Late Nights</p>
            </div>
        )

        return (
            <div>
                <NavBar />
                <div className="user-show-container">
                    <div className="user-show-subcontainer">
                        <div className='us-header-container'>
                            <h1>Nahid</h1>
                            <div className="us-insights">
                                <ul className="insights-ul-us">
                                    <li className="following-us-insights">
                                        <p>following</p>
                                        <h1>135</h1>
                                    </li>
                                    <li className="following-us-insights">
                                        <p>followers</p>
                                        <h1>110</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="us-bottom-container">
                            <div className="list-container">
                                <h2>lists</h2>
                                <div className="list-subcontainer">
                                    <ul>
                                        <li>{list1}</li>
                                        <li>{list2}</li>
                                        <li>{list3}</li>
                                    </ul>
                                </div>
                                <div className="bottom-containter">
                                    <div className="recs-header">
                                    </div>
                                    <div className="recs-container">

                                    </div>
                                </div>
                            </div>
                            <div className="right-bottom-container">
                                <div>
                                    <h1>updates</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="us-footer">
                        <div className="footer-links-us">
                            <a href="https://github.com/LeeXiuLong/Taste">Github</a>
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

export default UserShow;