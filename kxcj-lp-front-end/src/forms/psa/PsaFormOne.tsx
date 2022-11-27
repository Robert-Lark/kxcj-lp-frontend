import { FormWrapper } from "../../lib/FormWrapper";


type PSAData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  useThrough: string;
  time10: string;
  time30: string;
  announcement: string;
};

type PSAFormProps = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  useThrough: string;
  time10: string;
  time30: string;
  announcement: string;
  updateFields: (fields: Partial<PSAData>) => void;
};

export function PsaFormOne({
  name,
  organization,
  phone,
  email,
  useThrough,
  time10,
  time30,
  announcement,
  updateFields,
}: PSAFormProps) {
  return (
    <FormWrapper title="Your Info">
      <label>Name</label>
      <input
        autoFocus
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      ></input>
      <label>Email Address</label>
      <input
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      ></input>
      <label>Organization Name</label>
      <input
        type="text"
        value={organization}
        onChange={(e) => updateFields({ organization: e.target.value })}
      ></input>
      <label>Phone Number</label>
      <input
        min={1}
        type="number"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      ></input>
    </FormWrapper>
  );
}
