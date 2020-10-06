import React from 'react';
import NavBar from '../nav/navbar_container';
import './home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className="home-main">
                <NavBar />
                <div className="home-container">
                    <div className="home-subcontainer">
                        <div className="home-greeting">
                            <p> welcome Nahid!</p>
                        </div>
                        <div className="header-container-home">

                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Home;