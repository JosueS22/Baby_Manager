import { pull } from 'lodash';
import * as types from '../types/eventsForBaby';

const eventsForBaby = (state = {}, action) => {
    switch (action.types) {
        case types.EVENT_ADDED_TO_BABY: {
            return {
                ...state,
                [action.payload.idBaby]: [...state[action.payload.idBaby], action.payload.idEvent]
            };
        }
        case types.EVENT_REMOVED_FROM_BABY: {
            return {
                ...state,
                [action.payload.idBaby]: [pull(...state[action.payload.idBaby], [action.payload.idEvent])]
            };
        }
        default: {
            return state;
        }
    }  
};

export default eventsForBaby;

export const getBabyEvents = (state, idBaby) => state[idBaby];