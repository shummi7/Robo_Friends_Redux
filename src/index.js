import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer_searchRobots} from './reducer';

const store=createStore(reducer_searchRobots)

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));

serviceWorker.register();
