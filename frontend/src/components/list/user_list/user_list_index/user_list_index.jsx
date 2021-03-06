import React from 'react';
import NavBar from '../../../nav/navbar_container';
import { Link } from 'react-router-dom';
import '../../list_index.scss';
// import { fetchUserLists } from '../../util/list_api_util';

class UserListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
    }

    componentDidMount() {
        this.props.fetchUser().then(user => {
            this.props.fetchUserLists(this.props.user.data._id)
        })

    }


    render() {

        // const { openModal } = this.props;
        let listArr;
        let allLists = [];

        if (!this.props.lists) return null;

        if (this.props.lists) {
            listArr = Object.values(this.props.lists).filter(list => {
                return list._id;
            })


            let lists = listArr.map(list => {
                return <div className="list-container" key={list._id}>
                    <Link to={`/lists/${list._id}`} style={{ textDecoration: 'none' }}>
                        <p>{list.name}</p>
                    </Link>
                </div>

            })

            for (let i = 0; i < lists.length; i += 4) {
                allLists.push(<div key={i} className="row">{lists.slice(i, i + 4)}</div>)
            }
        }

        return (
            <div className="list-index-main">
                <NavBar />
                <div className="list-index-container">
                    <div className="list-index-subcontainer">
                        <div className="list-items-container">
                            <div className="list-i-toptext">
                                <h2 className="list-main-h2">lists</h2>
                                {/* <button className="list-main-button" onClick={() => openModal('list')}>+</button> */}
                            </div>
                            <div className="list-subcontainer">
                                <ul>
                                    <li>{allLists}</li>
                                </ul>
                            </div>
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

export default UserListIndex;