import { FormWrapper } from "./FormWrapper";

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

export function PsaForm({
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
    <FormWrapper title="Submit a PSA">
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
      <label>Organization Name test</label>
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
      <label>Use Through Date</label>
      <input
        min={1}
        type="string"
        value={useThrough}
        onChange={(e) => updateFields({ useThrough: e.target.value })}
      ></input>
      <label>Ten Second PSA</label>
      <input
        id="ten"
        type="radio"
        value={time10}
        onChange={(e) => updateFields({ time10: e.target.value })}
      ></input>
      <label>Thirty Second PSA</label>
      <input
        id="thirty"
        type="radio"
        value={time30}
        onChange={(e) => updateFields({ time30: e.target.value })}
      ></input>
      <label>Your Announcement</label>
      <textarea rows={4} cols={50} name={announcement}>
        Enter your announcement here
      </textarea>
    </FormWrapper>
  );
}
