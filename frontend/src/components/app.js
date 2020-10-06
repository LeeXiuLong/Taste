import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import UserShow from './user_profile/user_show_container';
import Modal from './modal/modal';
// import { Switch } from 'react-router-dom';
// import NavBar from './nav/navbar_container';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        {/* <Switch> */}
            <Modal />
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/users" component={UserShow} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        {/* </Switch> */}
    </div>
);

export default App;