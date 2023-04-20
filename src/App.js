import './App.css';
import React, { useState } from 'react';
import AppRouter from './routers';
import Header from './components/Header';

function App() {
  const [currUser, setCurrUser] = useState(false);
  return (
    <div className="row">
      <Header currUser={currUser} setCurrUser={setCurrUser} />
      <div className="col-md-10 offset-md-2 main-content">
        <AppRouter currUser={currUser} setCurrUser={setCurrUser} />
      </div>
    </div>
  );
}

export default App;
