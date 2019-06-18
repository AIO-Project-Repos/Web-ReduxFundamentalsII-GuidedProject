import React from 'react';
import { connect } from 'react-redux';
import { func, number } from 'prop-types';
import { addQuote } from '../state/actionDispatchers';


export class QuoteForm extends React.Component {
  authorRef = React.createRef()

  textRef = React.createRef()

  onAddQuote = () => {
    this.props.addQuote(
      this.authorRef.current.value,
      this.textRef.current.value,
    );
    // 2- implement so it uses this.props.addQuote
    // and also clears the inputs
  }

  render() {
    return (
      <div>
        <h3>You have {this.props.numberOfQuotes || '0'}. Add New Quote!</h3>
        <div>
          <em>Author: </em>
          <input ref={this.authorRef} type="text" />
        </div>
        <div>
          <em>Text: </em>
          <input ref={this.textRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddQuote}>Add Quote</button>
        </div>
      </div>
    );
  }
}

QuoteForm.propTypes = {
  addQuote: func.isRequired,
  numberOfQuotes: number.isRequired,
};

function mapStateToProps(state) {
  return {
    // 1- fix so component gets a numberOfQuotes
    // that maps to state.quotes.length
  };
}

export default connect(mapStateToProps, { addQuote })(QuoteForm);
