import React from 'react';
import { connect } from 'react-redux';
import { shape, string, arrayOf, func, bool } from 'prop-types';
import Quote from './Quote';
import { deleteQuote, makeQuoteOfTheDay, markApocryphal } from '../App';


export class Quotes extends React.Component {
  render() {
    const quotes = this.props.quotes || [];

    return (
      <div>
        <h3>My Favorite Quotes</h3>
        <div>
          {
            // is <Quote /> getting everything it needs?
            quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
                markApocryphal={this.props.markApocryphal}
                deleteQuote={this.props.deleteQuote}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  // data from state:
  quotes: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
    apocryphal: bool.isRequired,
  })).isRequired,
  quoteOfTheDay: string,
  // functions that change state:
  makeQuoteOfTheDay: func,
  markApocryphal: func,
  deleteQuote: func,
};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { deleteQuote, makeQuoteOfTheDay, markApocryphal },
)(Quotes);
