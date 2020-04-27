import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';

let babyId = 1;
let babyName = 'Josue';

const EventsForm = ({ onSubmit, babyId, babyName, types }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <div className='event-form-wrapper'>
      <h2> {'Agregar evento'}</h2>
      <div className='FormBaby'>
        <label className='FormField_Label' htmlFor='name'>
          Tipo
        </label>
        <select onChange= {e => changeValue1(e.target.value)}
        value={value1} className='selectorTipo'>
          {types.map(
            value1 => (
              <option key={value1[0]} value={value1[1]}>
                {value1[1]}
              </option>
            )
          )}
        </select>
        <div className='FormField'>
          <label className='FormField_Label' htmlFor='name'>
            Nota
          </label>
          <input type='text' className='FormField_Input' placeholder='Ingrese obervaciones' 
          value={value2} onChange={e => changeValue2(e.target.value)}/>
        </div>
        <button className='SubmitButton' type='Submit' 
        onClick={() => onSubmit(value1, value2, babyId, babyName)}>
          {'Enviar'}
        </button>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    babyId: Object.entries(selectors.getSelectedBaby(state))[0][1],
    babyName: Object.entries(selectors.getSelectedBaby(state))[0][1],
    types: [
      [0, 'Cambio de pamper por popo'],
      [1, 'Cambio de pamper por pipi'],
      [2, 'Tomo pecho'],
      [3, 'Tomo pacha'],
      [4, 'Tomo una siesta'],
      [5, 'Otro']
    ],
  }),
  (dispatch) => ({
    onSubmit(value1, value2, babyId, babyName) {
      var idEvent = uuidv4();
      dispatch(
        actions.addEvent(idEvent, value1, new Date(), value2, babyId, babyName),
      );
    },
  }),
)(EventsForm);