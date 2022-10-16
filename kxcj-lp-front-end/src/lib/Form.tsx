import React, { FormEvent, useState } from "react";
import "../styles/form.css";
import { BecomeDjForm } from "./BecomeDjForm";
import { ContactForm } from "./ContactForm";
import { useMultistepForm } from "./FormHook";
import { PsaForm } from "./PsaForm";

type formValues = {
  value: string;
  placeholder: string;
  name: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  emailAddress: string;
  phoneNumber: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  emailAddress: "",
  phoneNumber: "",
};

function Form(props: formValues) {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <ContactForm {...data} updateFields={updateFields} />,
      <PsaForm {...data} updateFields={updateFields} />,
    //   <BecomeDjForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    // here is where we send the data
    alert("successfull form submission");
  }
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
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
