import React,{useState} from 'react';
import { connect } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';
import * as actionsEvenToBaby from '../../actions/eventsForBaby';

const AddEvent = ({onSubmit, currSelectedBaby}) => {
    const [type, changeType] = useState('');
    const [info, changeInfo] = useState('')
    return(
        <div className = 'add-event-wrapper'>
            <input
                type = 'text'
                placeholder ='type'
                value = {type}
                onChange = {e => changeType(e.target.value)}
            />
            <input
                type = 'text'
                placeholder ='info'
                value = {info}
                onChange = {e => changeInfo(e.target.value)}
            />
            <button type = 'submit' onClick = {
                () => onSubmit(type, info, currSelectedBaby)
            }>
                {'Agregar'}
            </button>
        </div>
    );
}

export default connect(
    state =>({
        currSelectedBaby: selectors.getSelectedBaby(state),
    }),
     dispatch=> ({
        onSubmit(type, info, currSelectedBaby){
            const eventId = uuidv4();
            dispatch(actions.addEvent(eventId,type,info,moment().format('MMMM Do YYYY, h:mm:ss a')));
            dispatch(actionsEvenToBaby.addEventToBaby(currSelectedBaby,eventId));
        }
    })
)(AddEvent)