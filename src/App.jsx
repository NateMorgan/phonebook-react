import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Phonebook from './components/Phonebook/Phonebook';
import NewForm from './components/NewForm/NewForm';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [phonebook,setPhonebook] = useState([
    {
      firstName:'Nathaniel',
      lastName:'Morgan',
      phoneNumber: '123-456-7890'
    }
  ])

  const addContact = (newContact) => {
    setPhonebook([...phonebook,newContact])
  }

  return (
    <>
      <Header/>
      <SearchBar/>
      <Phonebook phonebook={phonebook}/>
      <NewForm addContact={addContact}/>
    </>
  );
}

export default App;
