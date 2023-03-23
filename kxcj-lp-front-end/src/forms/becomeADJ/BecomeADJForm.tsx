import React, { FormEvent, useState } from "react";
import "../../styles/form.css";
import { useMultistepForm } from "../../lib/FormHook";
import { GeneralInfo } from "../GeneralInfo";
import { BecomeDjForm } from "../../lib/BecomeDjForm";


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

function BecomeADJ(props: formValues) {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <BecomeDjForm DJName={""} Style={""} CoHosts={""} Phone={""} updateFields={function (fields: Partial<{ DJName: string; Style: string; CoHosts: string; Phone: string; }>): void {
        throw new Error("Function not implemented.");
      } } />,
      
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

export default BecomeADJ;
