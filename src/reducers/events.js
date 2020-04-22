import * as types from '../types/events';
import omit from 'lodash/omit';
import pull from 'lodash/pull';
import { combineReducers } from 'redux';

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

const order = (state = [], action) => {
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
    order,
});

export default events;

export const getEvent = (state, id) => state[id];

export const getEvents = (state) => state.order.map(
    id => getEvent(state, id)
).filter(event => event != null);