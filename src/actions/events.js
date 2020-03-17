import * as types from '../types/events';

export const addEvent = (id, name, lastName) => ({
    types: types.EVENT_ADDED,
    payload: {
        id,
        type,
        info,
        date,
    },
});