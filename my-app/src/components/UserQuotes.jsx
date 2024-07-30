
import React, { useState } from 'react';

const UserQuotes = ({ quotes, setUserQuotes }) => {
  const [newQuote, setNewQuote] = useState('');

  const addQuote = () => {
    setUserQuotes([...quotes, newQuote]);
    setNewQuote('');
  };

  return (
    <div className="user-quotes">
      <h2>User Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
        placeholder="Enter your quote"
      />
      <button onClick={addQuote}>Add Quote</button>
    </div>
  );
};

export default UserQuotes;
                