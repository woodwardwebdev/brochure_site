import React from 'react';
import styles from '../styles/Contact.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'




export default function Contact() {
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleForm = (e) => {
        e.preventDefault();
        setForm({
            name: '',
            email: '',
            phone: '',
            message: '',
        })
    }
    return (
        <div>
            <Header />
            <div className={styles.hero}>
                <h1 className={styles.title}>Reach Out</h1>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formText}>
                    <p className={styles.intro} >Pop your details in the form below and one of the team will be in touch ASAP.</p>
                </div>
                <form className={styles.contactForm} onSubmit={handleForm}>
                    <input type='text' value={form.name} name='name' id='name' placeholder='Name' autoComplete='no' onChange={handleChange} />
                    <input type='email' value={form.email} name='email' id='email' placeholder='Email Address' autoComplete='no' onChange={handleChange} />
                    <input type='text' value={form.phone} name='phone' id='phone' placeholder='Phone Number' autoComplete='no' onChange={handleChange} />
                    <textarea type='textarea' value={form.message} rows={10} resize='none' name='message' id='message' placeholder='Send a Message' autoComplete='no' onChange={handleChange} />
                    <button className={styles.formBtn}>Send It</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}