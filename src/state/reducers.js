import * as types from './actionTypes';
import dummyQuotes from '../constants/dummyQuotes';

// STEP 3: BUILD ONE REDUCER PER STATE SLICE
// No side effects! No randomness! Always return state! (even if unchanged)
export function quotesReducer(state = dummyQuotes, action) {
  switch (action.type) {
    case (types.DELETE_QUOTE):
      return state.filter(quote => quote.id !== action.payload);
    case (types.ADD_QUOTE):
      // return state.concat(action.payload);
      return [...state, action.payload];
    case (types.MARK_APOCRYPHAL):
      return state.map(quote => {
        if (quote.id === action.payload) {
          // we need to return a BRAND NEW THING
          // const apocryfiedQuote = Object.assign({}, quote, { apocryphal: true });
          // return apocryfiedQuote;

          // emily has it right!!!!!!
          return { ...quote, apocryphal: true };
        }
        return quote;
      });
    default:
      return state;
  }
}

export function quoteOfTheDayReducer(state = null, action) {
  switch (action.type) {
    case (types.MAKE_QUOTE_OF_THE_DAY):
      return action.payload;
    case (types.DELETE_QUOTE):
      return action.payload === state
        ? null
        : state;
    default:
      return state;
  }
}
