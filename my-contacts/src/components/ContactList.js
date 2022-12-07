import { useState } from "react";

const ContactList = ({contacts}) => {

    const [filteredText, setFilteredText] = useState('')

    const filtered = contacts.filter( (contact) => {

        return Object.keys(contact).some( (key) => {
            return contact[key].toString().toLowerCase().includes(filteredText.toLowerCase())
        } )

    } )



    return (
        <div>
            <input name="filtertext" placeholder="Filter Contact" value={filteredText}
                    onChange={ (event) => {setFilteredText(event.target.value)}  }/>
            <ul>
                {
                    filtered.map((contact, index)  => {
                        return <li key={index + 'contact'}> {contact.fullname} - {contact.tel_number} </li>
                    })
                }
            </ul>
        </div>
    )
}


export default ContactList;