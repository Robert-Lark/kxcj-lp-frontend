import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./styles/test.css";
import Scroll from "./assets/Scrolls/Scroll_s.png";
import SideButtons from "./lib/SideButtons";

function BecomeDjGood() {
  const location = useLocation();
  const [djName, setDjName] = useState("");
  const [musicStyle, setMusicStyle] = useState("");
  const [coHosts, setCoHosts] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_9fu5jyw",
          "template_8r21128",
          form.current,
          "_9f0M6ZsHv1G2xiIL"
        )
        .then((result) => {
          setDjName('');
          setMusicStyle('');
          setCoHosts('');
          setPhoneNumber('');
          setEmail('');
          alert("successfull form submission");
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
    console.log('Form submitted:', djName, musicStyle, coHosts, phoneNumber, email);
  };

  return (
    <div className="container-test">
      <div className="background-test-dj" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="content-test">
        <div className="component-test">
          <img
            src={Scroll}
            alt="scroll"
          />
        </div>

        <div className="component-test-form">
          <form onSubmit={handleSubmit} ref={form}>
            <label htmlFor="djName">DJ Name</label>
            <input
              id="djName"
              autoFocus
              required
              type="text"
              value={djName}
              onChange={(e) => setDjName(e.target.value)}
              name="DjName"
            />
            <label htmlFor="musicStyle">Style of Music</label>
            <input
              id="musicStyle"
              type="text"
              value={musicStyle}
              onChange={(e) => setMusicStyle(e.target.value)}
              name="styleOfMusic"
            />
            <label htmlFor="coHosts">Co-Hosts</label>
            <input
              id="coHosts"
              type="text"
              value={coHosts}
              onChange={(e) => setCoHosts(e.target.value)}
              name="coHosts"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              min={8}
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="component-test"></div>
      </div>
    </div>
  );
}

export default BecomeDjGood;
