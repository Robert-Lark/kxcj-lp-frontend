import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./styles/test.css";
import Scroll from "./assets/Scrolls/Scroll_v.png";
import SideButtons from "./lib/SideButtons";

function VolunteerGood() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [phone, setPhone] = useState('');

  const form = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    if (form.current) {
        emailjs
          .sendForm(
            "service_9fu5jyw",
            "template_8r21128",
            form.current,
            "_9f0M6ZsHv1G2xiIL"
          )
          .then((result) => {
            setName('')
            setEmail('')
            setSkills('')
            setPhone('')
            alert("successfull form submission");
          })
          .catch((error) => {
            console.log(error.text);
          });
      }
  };

  return (
    <div className="container-test">
      <div className="background-test-volunteer" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="content-test">
        <div className="component-test">
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={Scroll}
            alt="scroll"
          />
        </div>

        <div className="component-test-form">
        
    <form onSubmit={handleSubmit} ref={form}>
      <label htmlFor="name">Name</label>
      <input
        autoFocus
        required
        type="text"
        id="name"
        name="volunteerName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        required
        type="text"
        id="email"
        name="volunteerEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="skills">Skills & Expectations</label>
      <textarea
        rows={4}
        cols={50}
        id="skills"
        name="skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      ></textarea>

      <label htmlFor="phone">Phone</label>
      <input
        required
        min={8}
        type="number"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
        </div>

        <div className="component-test">Component 3</div>
      </div>
    </div>
  );
}

export default VolunteerGood;
