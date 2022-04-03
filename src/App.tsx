import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function useFetch() {
  const [state, setState] = useState('fetching message ...')

  useEffect(() => {
    fetch('https://my-app.naive1988.workers.dev/')
      .then(res => res.json())
      .then(
        ({ data }) => { setState(data) },
        () => {setState('fetch failed, please reload page')}
      )
  }, [])

  return [state]
}

function App() {
  const [message] = useFetch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
