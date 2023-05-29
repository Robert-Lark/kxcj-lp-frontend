import React, { FormEvent, useState, useRef } from "react";
import "../styles/form.css";
import { ContactForm } from "./ContactForm";
import { useMultistepForm } from "./FormHook";
import { PsaForm } from "./PsaForm";
import emailjs from "@emailjs/browser";

type formValues = {
  value: string;
  placeholder: string;
  formHeading: string;
};

type FormData = {
  //on all forms
  name: string;
  email: string;
  //become a dj
  age: string;
  //submit a psa
  phone: string;
  organization: string;
  useThrough: string;
  time10: string;
  time30: string;
  announcement: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  age: "",
  email: "",
  phone: "",
  organization: "",
  useThrough: "",
  time10: "",
  time30: "",
  announcement: "",
};

function Form(props: formValues) {
  const [data, setData] = useState(INITIAL_DATA);
  const form = useRef<HTMLFormElement>(null);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      // <ContactForm {...data} updateFields={updateFields} />,
      <PsaForm {...data} updateFields={updateFields} />,
      //   <BecomeDjForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLastStep) return next();
    if (form.current) {
      emailjs
        .sendForm(
          "service_9fu5jyw",
          "template_8r21128",
          form.current,
          "_9f0M6ZsHv1G2xiIL"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
      alert("Successful form submission");
    }
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit} ref={form}>
        <div className="step">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="buttons">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
