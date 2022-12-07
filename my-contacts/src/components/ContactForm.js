import { useState, useEffect } from "react";

const initialFormState = {fullname:'', tel_number:''}

const ContactForm = (props) => {

    const [form,setForm] = useState(initialFormState);

    useEffect( () => {
        setForm(initialFormState)
    }, [props.contacts] )

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const submitForm = () => {
        props.setContacts([...props.contacts,form])
        
    }

    return (
        <div>
            <div>
                <input value={form.fullname} name="fullname" placeholder="İsim Giriniz" onChange={onChangeInput}/>
            </div>
            <div>
                <input value={form.tel_number} name="tel_number" placeholder="Telefon Numarası" onChange={onChangeInput}/>
            </div>
            <div>
                <button onClick={submitForm}>Ekle</button>
            </div>
        </div>
    )
}

export default ContactForm;