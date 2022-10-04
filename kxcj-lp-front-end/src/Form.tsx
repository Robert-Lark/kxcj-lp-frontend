import React, { useState } from 'react';
import '../src/styles/form.css'

type formValues = {
    value: string
    placeholder: string
    name: string
}

function Form(props: formValues) {
    const { value, placeholder, name} = props
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className='form'>
            <form>
                <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    required
                />
                <input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    required
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email address"
                    type="text"
                    name="email"
                    required
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    type="text"
                    name="password"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;