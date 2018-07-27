// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

//Strore
import LectrumFacebookModel from './store'

//Main container
import FeedContainer from './modules/feed/'

// Theme
import './theme/init';


const store = new LectrumFacebookModel()
const ObserverFeedContainer = observer(FeedContainer);

ReactDOM.render(<ObserverFeedContainer store={store}/>, document.getElementById('app'));
