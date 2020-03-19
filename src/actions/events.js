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

export const deleteEvent = (id) => ({
    type: types.EVENT_DELETED,
    payload: { id },
});