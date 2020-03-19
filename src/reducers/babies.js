import { combineReducers } from 'redux';
import * as types from '../types/babies';

const order = (state = [], action) => {
    switch(action.types){
        case types.BABY_ADDED: {
            return [...state, action.payload.id];
        }
        default: {
            return state;
        }
    }
};

const byId = (state = {}, action ) => {
    switch(action.type) {
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

const selectBaby = (state = [], action) => {
    switch(action.type) {
        case types.BABY_SELECTED: {
            return action.payload;
        }
        case types.BABY_ADDED: {
            return action.payload.id;
        }
        default: {
            return state;
        }
    }
};

const babies = combineReducers({
    byId,
    order,
    selectBaby,
});

export default babies;

export const getBaby = (state, id) => state.byId[id];
export const getBabies = (state) => state.order.map(
    id => getBaby(state, id)
    ).filter(baby => baby != null);
export const getSelectedBaby = state => state.selectBaby;
