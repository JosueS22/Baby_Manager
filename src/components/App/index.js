import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import BabiesForm from '../BabiesForm';
import EventsForm from '../EventsForm';
import Babies from '../Babies';
import Events from '../Events'

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <EventsForm />
    <BabiesForm/>
    <Babies/>
    <Events/>
  </Provider>
);


export default App;