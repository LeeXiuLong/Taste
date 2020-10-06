import React from 'react';
import { AuthRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import UserShow from './user_profile/user_show_container';
import Modal from './modal/modal';
import Home from './home/home_container';
// import { Switch } from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/users" component={UserShow} />
        <AuthRoute path="/home" component={Home}/>
    </div>
);

export default App;