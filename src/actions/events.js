import * as types from '../types/events';

export const addEvent = (id, tipo, dateTime, info, babyId, babyName) => ({
    types: types.EVENT_ADDED,
    payload: {
        id,
        tipo,
        dateTime,
        info,
        babyId,
        babyName,
    },
});

export const deleteEvent = (id) => ({
    type: types.EVENT_DELETED,
    payload: { id },
});