import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {useState} from 'react'

function App() {

  const [contacts, setContacts] = useState([])


  return (
    <div id="app-container">
      <div className="contact-container">
        <ContactList contacts={contacts}  />
        <ContactForm setContacts={setContacts} contacts={contacts}/>
      </div>
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    </div>
  );
}

export default App;
