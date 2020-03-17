import * as types from '../types/events';

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

export default events;

export const getEvent = (state, id) => state[id];