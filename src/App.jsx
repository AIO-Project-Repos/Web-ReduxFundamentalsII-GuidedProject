import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import dummyQuotes from './constants/dummyQuotes';
import Container from './components/Container';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { quotes, quoteOfTheDay }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

// STEP 2: COME UP WITH ACTION TYPES
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const MAKE_QUOTE_OF_THE_DAY = 'MAKE_QUOTE_OF_THE_DAY';
export const ADD_QUOTE = 'ADD_QUOTE';
export const MARK_APOCRYPHAL = 'MARK_APOCRYPHAL';

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
// No side effects! No randomness! Always return state! (even if unchanged)
function quotesReducer(state = dummyQuotes, action) {
  // flesh out using action types to help you
  return state;
}

function quoteOfTheDayReducer(state = null, action) {
  // flesh out using action types to help you
  return state;
}

// STEP 4: COMBINE REDUCERS
// use combineReducers to create a root reducer off of our reducers
const combinedReducer = Function.prototype;

// STEP 5: CREATE THE REDUX STORE
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// STEP 6: USE THE PROVIDER TO WRAP THE APP PASSING THE STORE AS PROP
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);

// STEP 7: CREATE ACTION DISPATCHER FUNCTIONS
// action dispatchers can be shared across all components,
// and saves components from having to use props.dispatch explicitly
export function deleteQuote(id) {
  return {
    // flesh out
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    // flesh out
  };
}

export function markApocryphal(id) {
  return {
    // flesh out
  };
}

export function addQuote(author, text) {
  return {
    // flesh out. This action needs a more complicated payload.
    // A quote is more than author and text!
  };
}
