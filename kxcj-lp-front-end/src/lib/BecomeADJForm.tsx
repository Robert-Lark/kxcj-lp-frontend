import React, { useState } from 'react';
import '../styles/form.css'

function BecomeDJForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [programName, setProgramName] = useState("");
    const [programDesc, setProgramDesc] = useState("");
    return (
        <div className='form'>
            <form id='becomeDJ'>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    name="firstName"
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
                    value={programName}
                    onChange={e => setProgramName(e.target.value)}
                    placeholder="Program Name"
                    type="text"
                    name="lastName"
                    required
                />
                <textarea
                    value={programDesc}
                    onChange={e => setProgramDesc(e.target.value)}
                    placeholder="Program Description"
                    form="becomeDJ"
                    name="program-description"
                    required
                />
                <div>
                <div>
                
                </div>
                <div></div>
                <div></div>
                <div></div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BecomeDJForm;