import * as types from '../types/eventsForBaby';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_EVENT_ADDED: {
            return {
                ...state,
                [action.payload.baby]: [...action.payload.event],
            };
        }
        case types.BABY_EVENT_REMOVED: {
            return {
                ...state,
                [action.payload.baby]: [...state.payload.baby].filter(b => b !== action.payload.event),
            };
        }
        default: {
            return state;
        }
    }  
};

export default byId;

export const getAddedEvent = (state, babyId) => state[babyId];
export const getAddedEvents = state => state.order.map(
    babyId => getAddedEvent(state, babyId),
).filter(babyId => babyId != null);
