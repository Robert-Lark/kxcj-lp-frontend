import { FormWrapper } from "./FormWrapper";

type PSAData = {
    firstName: string;
    lastName: string;
    age: string;
  };
  
  type PSAFormProps = {
    firstName: string;
    lastName: string;
    age: string;
    updateFields: (fields: Partial<PSAData>) => void;
  };

export function PsaForm({
    firstName,
    lastName,
    age,
    updateFields,
  }: PSAFormProps)  {
  return (
    <FormWrapper title="Submit a PSA test">
      <label>First Name</label>
      <input autoFocus required type="text" value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}></input>
      <label>Last Name</label>
      <input required type="text"value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}></input>
      <label>Age</label>
      <input required min={1} type="number"value={age}
        onChange={(e) => updateFields({ age: e.target.value })}></input>
    </FormWrapper>
  );
}
