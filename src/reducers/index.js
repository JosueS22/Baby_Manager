import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';
import eventsForBabies, * as eventsForBabiesSelectors from './eventsForBaby';

const reducer = combineReducers({
    babies,
    events,
    eventsForBabies,
});

export default reducer;

export const getBaby = (
    state, 
    index
) => babiesSelectors.getBaby(state.babies, index);

export const getBabies = (
    state,
) => babiesSelectors.getBabies(state.babies);

export const getEvent = (
    state,
    index,
) => eventsSelectors.getEvent(state.events, index);

export const getBabyEvents = (
    state, 
    idBaby,
) => eventsForBabiesSelectors.getBabyEvents(
    state.eventsForBabies, 
    idBaby,
);

