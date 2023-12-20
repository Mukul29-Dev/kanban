import React from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import Body from './components/body/body.jsx'

function App() {
  return (
    <div className="App">
      <react-fragment>
        <>
          <Header />
          <Body />
        </>
      </react-fragment>
    </div>
  );
}

export default App;
