// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

//Strore
import LectrumFacebookModel from './store'

//Simple components
import AppComponent from './components/AppComponent'
//Containers
import FeedContainer from './modules/feed/'
import { SignupContainer, SigninContainer } from './modules/sign/'

// Theme
import './theme/init';

//styles
import './css/index.css'

//init store and observer
const store = new LectrumFacebookModel()

//Obserbable within stroe containters
const ObserverFeedContainer = observer(FeedContainer);
const ObserverSignupContainer = observer(SignupContainer);
const ObserverSigninContainer = observer(SigninContainer);

ReactDOM.render(
    <BrowserRouter>
        <AppComponent>
            <Switch>
                <Route exact path='/'>
                    { !store.token ? <Redirect to="/signin"/> : <ObserverFeedContainer store={store}/> }
                </Route>
                <Route path='/signin'>
                    { store.token ? <Redirect to="/"/> : <ObserverSigninContainer store={store}/> }
                </Route>
                <Route path='/signup'>
                    { store.token ? <Redirect to="/"/> : <ObserverSignupContainer store={store}/> }
                </Route>
            </Switch>
        </AppComponent>
    </BrowserRouter>,

    document.getElementById('app')
);
