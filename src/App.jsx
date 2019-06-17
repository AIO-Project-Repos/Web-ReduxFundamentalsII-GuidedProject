import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import dummyQuotes from './constants/dummyQuotes';
import Container from './components/Container';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { quotes, quoteOfTheDay }

// STEP 2: COME UP WITH ACTION TYPES
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const MAKE_QUOTE_OF_THE_DAY = 'MAKE_QUOTE_OF_THE_DAY';
export const ADD_QUOTE = 'ADD_QUOTE';
export const MARK_APOCRYPHAL = 'MARK_APOCRYPHAL';

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
function quotesReducer(state = dummyQuotes, action) {
  switch (action.type) {
    case ADD_QUOTE:
      return state.concat(action.payload);
    case DELETE_QUOTE:
      return state.filter(quote => quote.id !== action.payload)
    case MARK_APOCRYPHAL:
      return state.map(quote => {
        if (quote.id !== action.payload) {
          return quote;
        }
        quote.apocryphal = true;
        return quote;
      });
    default:
      return state;
  }
}

function quoteOfTheDayReducer(state = null, action) {
  // flesh out using action types as your guide
  switch (action.type) {
    case MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    default:
      return state;
  }
}

// STEP 4: COMBINE REDUCERS
// use combineReducers to create a root reducer off of our reducers
const combinedReducer = combineReducers({
  quotes: quotesReducer,
  quoteOfTheDay: quoteOfTheDayReducer,
});

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
export function deleteQuote(id) {
  return {
    type: DELETE_QUOTE,
    payload: id,
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}

export function markApocryphal(id) {
  return {
    type: MARK_APOCRYPHAL,
    payload: id,
  };
}

export function addQuote(author, text) {
  return {
    type: ADD_QUOTE,
    payload: {
      id: uuid(),
      author,
      text,
      apocryphal: false,
    },
  };
}
