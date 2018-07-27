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
                    <ObserverFeedContainer store={store}/>
                </Route>
                <Route path='/signin'>
                    <ObserverSigninContainer store={store}/>
                </Route>
                <Route path='/signup'>
                    <ObserverSignupContainer store={store}/>
                </Route>
            </Switch>
        </AppComponent>
    </BrowserRouter>,

    document.getElementById('app')
);
