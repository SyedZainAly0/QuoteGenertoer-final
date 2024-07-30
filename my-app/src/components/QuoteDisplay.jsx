
import React from 'react';

const QuoteDisplay = ({ title, quote }) => (
  <div className="quote-display">
    <h2>{title}</h2>
    <p>{quote}</p>
  </div>
);

export default QuoteDisplay;
                