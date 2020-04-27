import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';

const BabiesForm = ({ onSubmit }) => {
  const [babyName, changeBabyName] = useState('');
  const [babyLastName, changeBabyLastName] = useState('');
  return (
    <div className= "baby-form-wrapper">
      <h1>
        {'Agregar bebé'}
      </h1>
      <div className="FormBaby">
        <div className = "FormField">
          <label className="FormField_Label" htmlFor="name">
            <h2>Nombre</h2>
          </label>
          <input type="text" className="FormField_Input" placeholder="Nombre" value={babyName} onChange={e => changeBabyName(e.target.value)}/>
        </div>
        <div className = "FormField"> 
          <label className="FormField_Label" htmlFor="name">
            <h2>Apellido</h2>
          </label>
          <input type="text" className="FormField_Input" placeholder="Apellido" value={babyLastName} onChange={e => changeBabyLastName(e.target.value)}/>
        </div>
        <button className="SubmitButton" type="submit" onClick={
            () => onSubmit(babyName, babyLastName)
        }>
          {'Enviar'}
        </button>
      </div>
    </div>
  );
} 


export default connect(
  (state) => ({
    id: selectors.getBabies(state),
  }),
  dispatch => ({
    onSubmit(babyName, babyLastName) {
      dispatch(
        actions.addBaby(uuidv4(), babyName, babyLastName),
        console.log('Baby agregado')
        );
    },
  }),
)(BabiesForm);