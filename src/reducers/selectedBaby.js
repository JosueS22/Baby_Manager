import * as types from '../types/selectedBaby';

const selectBaby = (state = [0,"No hay bebes seleccionados",3], action) => {
  switch (action.type) {
    case types.BABY_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectBaby;


export const getSelectedBaby = state => state;