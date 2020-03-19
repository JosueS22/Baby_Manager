import React from 'react';
import { Provider } from 'react-redux';
import {Router, Switch, Route} from 'react-router';
import {createBrowserHistory} from 'history'

import { configureStore } from '../../store';
import AddEvent from '../AddEvent';
import AddBaby from '../AddBaby';
import BabiesWithEvents from '../BabiesWithEvents'
import './styles.css'

const store = configureStore();
const history = createBrowserHistory()

const App = () => (
    <Provider store={store}>
        <Router history = {history}>
            <Switch>
                <Route path ='/babies'>
                <div className='app-container'>
                    <BabiesWithEvents/>
                    <AddEvent/>
                </div>
                </Route>
                <Route path = '/'>
                <AddBaby/>
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default App;