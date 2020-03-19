import * as types from '../types/events';

export const addEvent = (id, tipo, info, date) => ({
    types: types.EVENT_ADDED,
    payload: {
        id,
        tipo,
        info,
        date,
    },
});

export const deleteEvent = (id) => ({
    type: types.EVENT_DELETED,
    payload: { id },
});