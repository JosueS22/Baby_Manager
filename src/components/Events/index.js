import {size} from 'lodash'
import React from 'react';
import {connect} from 'react-redux';

import './styles.css'
import * as selectors from '../../reducers';
import Event from '../event';

const Events = ({ events }) => (
    <div className="event-conteiner">
      {
        size(events) === 0 ? (
          <h1>
            {'Este bebe no tiene eventos :('}
          </h1>
        ) : (
          events.map(
            id => (
              <Event
                key={id}
                id = {id}
              />
            ),
          )
        )
      }
    </div>
    
  );

export default connect(
    state => ({
        events: selectors.getBabyEvents(state, selectors.getSelectedBaby(state)),
    }),
)(Events);