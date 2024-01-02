const redux = require('redux');

// console.log(redux);

// const initialState = {
//     counter: 0
// };

// const counterInitialState = {
//     counter: 0,
//     harchi: 'harkas'
// };
// const harchiInitialState = {
//     counter: 0,
//     name: 'poriya'
// };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'MINUS': {
//             return { counter: --state.counter };
//         }
//         case 'PLUSE': {
//             return { counter: ++state.counter };
//         }
//         default: {
//             return state;
//         }
//     }
// }

const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
        case 'MINUS': {
            return { ...state, counter: --state.counter };
        }
        case 'PLUSE': {
            return { ...state, counter: ++state.counter };
        }
        default: {
            return state;
        }
    }
}

const harchiReducer = (state = harchiInitialState, action) => {
    switch (action.type) {
        case 'CHANGE': {
            return { ...state, name: action.payload };
        }
        default: {
            return state;
        }
    }
}

// const store = redux.createStore(counterReducer);
// const store = redux.createStore(harchiReducer);
const store = redux.createStore(redux.combineReducers({ counter: counterReducer, harchi: harchiReducer }));

// console.log(store.getState());

// store.dispatch({ type: 'MINUS' });

// store.dispatch({ type: 'PLUSE' });

setInterval(() => {
    // store.dispatch({ type: 'MINUS' });
    store.dispatch({ type: 'PLUSE' });
    store.dispatch({ type: 'CHANGE', payload: 'zahra' });
}, 1000)

store.subscribe(() => {
    console.log(store.getState());
});

