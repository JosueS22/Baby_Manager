import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/events';

const Event = ({
    event,
    onDelete,
    currBaby,
}) => (<div className='event-container'>
    <button className='delete-event' 
    onClick={()=> onDelete(currBaby)}>
        {'X'}
    </button>
    <div>
        {'Tipo: ' + event.tipo}
    </div>
    <div>
        {'Informacion: ' + event.info}
    </div>
    <div>
        {'Fecha: ' + event.date}
    </div>
</div>);

export default connect(
    (state, {id}) => ({
        event: selectors.getEvent(state, id),
        currBaby: selectors.getSelectedBaby(state),
    }),
    (dispatch, {id}) => ({
        onDelete(currBaby){
            dispatch(actions.deleteEvent(currBaby), id)
        }
    })
)(Event)