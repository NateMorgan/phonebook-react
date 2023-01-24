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
    },
    {
      firstName:'Hugo',
      lastName:'Stine',
      phoneNumber: '098-765-4321'
    },
    {
      firstName:'Larry',
      lastName:'Landis',
      phoneNumber: '068-725-4391'
    },
    {
      firstName:'Bobby B',
      lastName:'Bdzyra',
      phoneNumber: '168-724-5390'
    }
  ])

  let [search,setSearch] = useState('')
  
  const addContact = (newContact) => {
    setPhonebook([...phonebook,newContact])
  }

  const changeSearch = (change) => {
    setSearch(change)
  }

  let filteredPhonebook = phonebook.filter( contact => {
    return contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.lastName.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <>
      <Header/>
      <SearchBar changeSearch={changeSearch}/>
      <Phonebook phonebook={filteredPhonebook}/>
      <NewForm addContact={addContact}/>
    </>
  );
}

export default App;
