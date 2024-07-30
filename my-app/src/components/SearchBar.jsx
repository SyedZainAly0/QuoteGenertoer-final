
import React, { useState } from 'react';

const SearchBar = ({ userQuotes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuotes = userQuotes.filter((quote) =>
    quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search quotes"
      />
      <ul>
        {filteredQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
                