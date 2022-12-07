import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {useState} from 'react'

function App() {

  const [contacts, setContacts] = useState([])


  return (
    <div className="App">
      <ContactList contacts={contacts}  />
      <ContactForm setContacts={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
