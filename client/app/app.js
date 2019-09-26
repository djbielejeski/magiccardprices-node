import React from 'react';
import './app.scss';
import Header from '../header/header';

function App() {
  return (
    <div className="container-fluid">
        <Header />
        <div>This "Face" should actually be a face</div>
        <div>
            <i className="material-icons">face</i>
        </div>
    </div>
  );
}

export default App;
