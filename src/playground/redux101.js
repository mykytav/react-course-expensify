/* eslint-disable */
import { createStore } from 'redux';

//  Action generators - functions that return action object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

//  Reducers
//  1 Reducers are pure functions (output is determined by input)
//  2 Never change state or action
const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;
    }

}

//  Actions - an object that gets sent to the store
const store = createStore(countReducer);

//  we pass fn to  subscribe method and this fn gets called every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
 
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 350 }));