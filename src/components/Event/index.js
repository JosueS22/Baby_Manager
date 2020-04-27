import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/events';


const Event = ({
    event,
    onClick,
    //onSubmit
}) => (
  <div className="event-wrapper">
    <div className="event" >
      <div className="event_type">
        Tipo: {(Object.entries(Object.entries(event)[1])[1]).slice(1)}
      </div>
      <div className="event_note">
        Nota: {(Object.entries(Object.entries(event)[3])[1]).slice(1)}
      </div>
      <div className="event_note">
        Realizado por: {(Object.entries(Object.entries(event)[5])[1]).slice(1)}
      </div>
      <div className="event_note">
        Realizado en la fecha: {(Object.entries(Object.entries(event)[2])[1].toString().slice(1,23).replace(/-/g,"")).slice(1)}
      </div>
      <button className="deleteEvent" type="submit" onClick={
        () => onClick()
      }>
        {'Eliminar evento'}
      </button>
    </div>
  </div>
);

export default connect(
  (state, { index }) => ({
    event: index,
  }),
  (dispatch, { index }) => ({
    onClick() {
      dispatch(actions.deleteEvent(Object.entries(index)[0][1]))
    },
  }),
)(Event);