import * as types from '../types/selectedBaby';

export const selectedBaby = index => ({
    type: types.BABY_SELECTED,
    payload: index,
});