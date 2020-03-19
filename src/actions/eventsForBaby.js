import * as types from '../types/eventsForBaby';

export const addEventToBaby = (idBaby, idEvent) => ({
    type: types.EVENT_ADDED_TO_BABY,
    payload: {
        idBaby,
        idEvent,
    },
});

export const removeEventFromBaby = (idBaby, idEvent) => ({
    type: types.EVENT_REMOVED_FROM_BABY,
    payload: {
        idBaby,
        idEvent,
    }
});
