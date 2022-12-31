import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Phonebook from './components/Phonebook/Phonebook';
import NewForm from './components/NewForm/NewForm';

function App() {

  const [phonebook,setPhonebook] = useState([
    {
      firstName:'Nathaniel',
      lastName:'Morgan',
      phoneNumber: '123-456-7890'
    }
  ])


  return (
    <>
      <Header/>
      <Phonebook phonebook={phonebook}/>
      <NewForm/>
    </>
  );
}

export default App;
