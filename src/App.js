import './App.css';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import GoodsListing from './components/store/goodsListing/goodsListing';
import GoodsListingUser from './components/store/goodsListingUser/goodsListingUser';
import Chat from './components/store/chat/chat';
import Login from './components/auth/login/login';
import Home from './components/store/home/home';
import Register from './components/auth/register/register';
import RestorePassword from './components/auth/restorePass/restorePassword';
import Profile from './components/auth/profile/profile';
import notFound from './components/store/notFound/notFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import users from './data/index';


const App = () => {

    return (
        <Provider store={users.users}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/restore-password' component={RestorePassword} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/goods-listing' component={GoodsListing} />
                    <Route path='/goods-listing-user' component={GoodsListingUser} />
                    <Route path='/chat' component={Chat} />
                    <Route component={notFound} />
                </Switch>
                <Footer />
            </Router>
        </Provider>
    )
};
const ObserverApp = observer(App);
// console.log(users);

export default ObserverApp;
