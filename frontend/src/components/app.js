import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import UserShow from './user_profile/user_show_container';
import CurrentUserShow from './user_profile/current_user_show/current_user_show_container';
import Modal from './modal/modal';
import Home from './home/home_container';
import ListIndex from './list/list_index_container';
import UserListIndex from './list/user_list/user_list_index/user_list_index_container';
import RestaurantIndex from './restaurant/restaurant_index_container';
import UserRestaurantIndex from './restaurant/user_restaurant_index/user_restaurant_index_container';
import RestaurantForm from './restaurant/restaurant_form/restaurant_form_container';
import ListShow from './list/list_show/list_show_container';
import UserListShow from './list/user_list/user_list_show/user_list_show_container';
import RestaurantShow from './restaurant/restaurant_show/restaurant_show_container';
import UserRestaurantShow from './restaurant/user_restaurant_show/user_restaurant_show_container';
import { Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

const App = () => (
    <div>
        <Route path="/" component={Modal} />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute path="/users/:userId" component={CurrentUserShow} />
        <ProtectedRoute path="/profile" component={UserShow} />
        <ProtectedRoute path="/home" component={Home}/>
        <ProtectedRoute path="/:userId/lists" component={UserListIndex} />
        <ProtectedRoute path="/mylists" component={ListIndex} />
        <ProtectedRoute path="/myrestaurants" component={RestaurantIndex} />
        <ProtectedRoute path="/:userId/restaurants" component={UserRestaurantIndex} />
        <ProtectedRoute path='/add-restaurant' component={RestaurantForm}/>
        <ProtectedRoute path='/list/:listId' component={ListShow} />
        <ProtectedRoute path='/lists/:listId' component={UserListShow} />
        <ProtectedRoute path="/myreviews/:reviewId" component={RestaurantShow}/>
        <ProtectedRoute path="/reviews/:reviewId" component={UserRestaurantShow} />
    </div>
);

export default App;