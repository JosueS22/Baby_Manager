import * as types from '../types/eventsForBaby';

export const addEventToBaby = (baby, eventId) => ({
    type: types.BABY_EVENT_ADDED,
    payload: {
        baby: baby,
        eventId,
    },
});

export const removeEventFromBaby = (agent, eventId) => ({
    type: types.BABY_EVENT_REMOVED,
    payload: {
        baby: agent,
        eventId,
    }
});
