
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteDisplay from './components/QuoteDisplay';
import UserQuotes from './components/UserQuotes';
import SignIn from './components/SignIn';
import SearchBar from './components/SearchBar';
import QuoteButton from './components/QuoteButton';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [magicQuote, setMagicQuote] = useState('');
  const [userQuotes, setUserQuotes] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const cachedQuotes = localStorage.getItem('quotes');
    if (cachedQuotes) {
      setQuotes(JSON.parse(cachedQuotes));
    } else {
      axios.get('https://type.fit/api/quotes')
        .then(response => {
          setQuotes(response.data);
          localStorage.setItem('quotes', JSON.stringify(response.data));
        })
        .catch(error => console.error('Error fetching quotes:', error));
    }
  }, []);

  const generateMagicQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setMagicQuote(quotes[randomIndex]?.text || '');
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignUp = (username, password) => {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    setIsSignedIn(true);
  };

  return (
    <div className="App">
      <h1>Quotes App</h1>
      {!isSignedIn ? (
        <>
          <SignIn onSignIn={handleSignIn} />
        </>
      ) : (
        <>
          <QuoteButton onClick={generateMagicQuote} />
          <div className="quote-sections">
            <QuoteDisplay title="Magic Quote" quote={magicQuote} />
            <UserQuotes quotes={userQuotes} setUserQuotes={setUserQuotes} />
          </div>
          <SearchBar userQuotes={userQuotes} />
        </>
      )}
    </div>
  );
};

export default App;
            