import React from 'react';
import './app.scss';
import Header from '../header/header';

function App() {
  return (
    <div className="container-fluid">
        <Header />
        <div>
            <i className="material-icons">face</i>
        </div>
    </div>
  );
}

export default App;
