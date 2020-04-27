import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';
import eventsForBabies, * as eventsForBabiesSelectors from './eventsForBaby';
import selectedBaby, * as selectedBabySelectors from './selectedBaby';

const reducer = combineReducers({
    babies,
    events,
    eventsForBabies,
    selectedBaby,
});

export default reducer;

export const getBaby = (
    state, 
    index
) => babiesSelectors.getBaby(state.babies, index);
export const getBabies = (
    state,
) => babiesSelectors.getBabies(state.babies);

export const getSelectedBaby = state => selectedBabySelectors.getSelectedBaby(state.selectedBaby);

export const getAddedEvent = (
    state,
    index,
) => eventsForBabiesSelectors.getAddedEvent(state.eventsForBabies, index);

export const getAddedEvents = (
    state, 
) => eventsForBabiesSelectors.getAddedEvents(
    state.eventsForBabies
);

export const getEvent = (
    state,
    id,
) => eventsSelectors.getEvent(state.events, id);
export const getEvents = (
    state,
) => eventsSelectors.getEvents(state.events);


