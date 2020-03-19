import * as types from '../types/events';
import { combineReducers } from 'redux';

const byId = (state ={}, action) => {
    switch (action.types) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }
        case types.EVENT_DELETED: {
            const newState = state
            delete newState[action.payload]
            return newState;
        }
    }
};

const order = (state = [], action) => {
    switch (action.types) {
        case types.EVENT_ADDED: {
            return [...state, action.payload.id]
        }
        case types.EVENT_DELETED: {
            const newState = state
            delete newState[action.payload]
            return newState;
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