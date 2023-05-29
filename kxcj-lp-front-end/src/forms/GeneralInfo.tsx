import { FormWrapper } from "../lib/FormWrapper";



type GeneralData = {
  name: string;
  email: string;
};

type GeneralFormProps = {
  name: string;
  email: string;
  updateFields: (fields: Partial<GeneralData>) => void;
};

export function GeneralInfo({
  name,
  email,
  updateFields,
}: GeneralFormProps) {
  return (
    <FormWrapper title="">
      <label>Name</label>
      <input
        autoFocus
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
        name="name"
      ></input>
      <label>Email Address</label>
      <input
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        name="email"
      ></input>
    </FormWrapper>
  );
}
