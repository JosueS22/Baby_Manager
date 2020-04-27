import omit from 'lodash/omit';
import { combineReducers } from 'redux';
import * as types from '../types/events';

const byId = (state ={}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        }
        case types.EVENT_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const byOrder = (state = [], action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return [...state, action.payload.id]
        }
        case types.EVENT_DELETED: {
            return [...state].filter(b => b !== action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const events = combineReducers ({
    byId,
    byOrder,
});

export default events;

export const getEvent = (state, id) => state.byId[id];

export const getEvents = (state) => state.byOrder.map(
    id => getEvent(state, id)
).filter(event => event != null);