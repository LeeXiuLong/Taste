import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import './list_index.scss';

class ListIndex extends React.Component {

    render() {
        let list1, list2, list3, list4;

        list1 = (
            <div className="list-container">
                <p>KBBQ</p>
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

        list4 = (
            <div className="list-container">
                <p>Coffee</p>
            </div>
        )

        return (
            <div className="list-index-main">
                <NavBar />
                <div className="list-index-container">
                    <div className="list-index-subcontainer">
                        <div className="list-items-container">
                            <div className="list-i-toptext">
                                <h2 className="list-main-h2">lists</h2>
                                <Link to="/create-list"><h3 className="list-main-h3">+</h3></Link>
                            </div>
                            <div className="list-subcontainer">
                                <ul>
                                    <li>{list1}</li>
                                    <li>{list2}</li>
                                    <li>{list3}</li>
                                    <li>{list4}</li>
                                </ul>
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
            </div>
        )
    }
};

export default ListIndex;