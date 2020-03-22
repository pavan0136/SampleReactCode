import React from 'react';
import './assets/app.css';
import Contacts from './components/contacts/contacts';
import Header from './components/shared/header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Contacts/>
    </div>
  );
}

export default App;
