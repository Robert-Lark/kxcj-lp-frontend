import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./styles/test.css";
import Scroll from "./assets/Scrolls/Scroll_p.png";
import SideButtons from "./lib/SideButtons";

function Modal(props: any) {
    const { show, setShow } = props;
    if (!show) return null;
    return (
      <div className="modal">
        <h1>Example Announcement</h1>
        <p>
          <strong>Contact:</strong> Insert the contact name, institution name,
          email address and telephone number
        </p>
        <p>
          <strong>For use through:</strong> End date of announcement
        </p>
        <p>
          <strong>Length:</strong> 0:30 - Indicates announcement runs for thirty
          seconds
        </p>
        <p>
          <strong>Content:</strong> One of the most important activities to share
          with your baby is reading. That's why the illinois valley public library
          is offering the "Born to read" program for teen parents. Tutors provide
          coaching, a video offers tips, and librarians distribute books and other
          materials. The program is made possible through a grant from the four
          way community foundation. for more information, or to be a volunteer,
          call (505) 555-1234.
        </p>
        <button onClick={() => setShow(!show)}>Close</button>
      </div>
    );
  }

function SubmitPSAGood() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useThrough, setUseThrough] = useState("");
  const [time10, setTime10] = useState("");
  const [announcement, setAnnouncement] = useState("");

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
          
          
          alert("successfull form submission");
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="container-test">
      <div className="background-test-submit" />
      <div className="sidebar-test">
        <SideButtons back currentPage={location.pathname} />
      </div>
      <div className="content-test">
        <div className="component-test">
          <img
            src={Scroll}
            alt="scroll"
          />
          <button className="example-psa-button" onClick={() => setShow(!show)}>
            View an example PSA here
          </button>
        </div>
        <Modal show={show} setShow={setShow}/>
        <div className="component-test-form">
          <form onSubmit={handleSubmit} ref={form}>
          <label className="form-label">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </label>
          <label className="form-label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </label>
          <label className="form-label">
            Use Through Date:
            <input
              type="text"
              value={useThrough}
              onChange={(e) => setUseThrough(e.target.value)}
              name="useThroughDate"
            />
          </label>
          <div className="radio-label">
            <label className="form-label">
              PSA Length:
              <input
                id="ten"
                type="text"
                value={time10}
                onChange={(e) => setTime10(e.target.value)}
                name="psaTime"
                placeholder="Please specify if you would like a 10s or 30s psa"
              />
            </label>
          </div>
          <label className="form-label">
            Your Announcement:
            <textarea
              rows={10}
              cols={50}
              name="announcement"
              value={announcement}
              className="form-textarea"
              onChange={(e) => setAnnouncement(e.target.value)}
            />
          </label>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="component-test"></div>
      </div>
    </div>
  );
}

export default SubmitPSAGood;
