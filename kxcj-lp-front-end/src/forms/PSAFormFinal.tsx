import React, { useState, useRef } from "react";
import "./PSAFormFinal.css";
import emailjs from "@emailjs/browser";

const PSAFormFinal = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useThrough, setUseThrough] = useState("");
  const [time10, setTime10] = useState("");
  const [time30, setTime30] = useState("");
  const [announcement, setAnnouncement] = useState("");

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
          console.log(result);
          console.log("test");
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
    console.log("Form submitted:", name, email);
  };

  return (
    <div className="form-psa">
      <div className="formContent-psa">
        <form className="form" onSubmit={handleSubmit} ref={form}>
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
                placeholder="Please specify if you would like a 10 second or 30 second psa"
              />
            </label>
          </div>
          <label className="form-label">
            Your Announcement:
            <textarea
              className="form-textarea"
              rows={10}
              cols={50}
              name="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
            />
          </label>
          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PSAFormFinal;
