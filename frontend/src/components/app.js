import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import UserShow from './user_profile/user_show_container';
import Modal from './modal/modal';
import Home from './home/home_container';
import ListIndex from './list/list_index_container';
import RestaurantIndex from './restaurant/restaurant_index_container';
import RestaurantForm from './restaurant/restaurant_form/restaurant_form_container';
import ListShow from './list/list_show/list_show_container';
import RestaurantShow from './restaurant/restaurant_show/restaurant_show_container';
import { Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

const App = () => (
    <div>
        <Route path="/" component={Modal} />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute path="/users/:userId" component={UserShow} />
        <ProtectedRoute path="/home" component={Home}/>
        <ProtectedRoute path="/:userId/lists" component={ListIndex} />
        <ProtectedRoute path="/:userId/restaurants" component={RestaurantIndex} />
        <ProtectedRoute path='/add-restaurant' component={RestaurantForm}/>
        <ProtectedRoute path='/lists/:listId' component={ListShow} />
        <ProtectedRoute path="/reviews/:reviewId" component={RestaurantShow}/>
    </div>
);

export default App;