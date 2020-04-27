import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import Event from '../Event';

const Events = ({ event }) => (
  <div className='t-wrapper'>
    <div className='events'>
      { event.length === 0 ? (
        <h1> 
          {'No hay acciones'} 
        </h1>
      ) : (
        (event).map(
          index => (
            <Event key={index} index={index}/>
          ),
        )
      )}
    </div>
  </div>
);

export default connect(
  state => ({
    event: selectors.getEvents(state),
  }),
)(Events);