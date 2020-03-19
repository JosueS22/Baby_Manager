import {createStore} from 'redux';

import reducer from './reducers'

export const configureStore = () =>{
    const store = createStore(reducer)
    const printState = () => {
        console.log(store.getState())
    }
    store.subscribe(printState)
    return store ;
}

export default configureStore;