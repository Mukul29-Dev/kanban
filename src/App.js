import React from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import Body from './components/body/body.jsx'
import { MyProvider } from './components/MyContext.jsx';


function App() {

  return (
        <div className="App"> 
           <MyProvider>
            <Header />
            <Body />
            </MyProvider>
        </div>    
  );
}

export default App;
