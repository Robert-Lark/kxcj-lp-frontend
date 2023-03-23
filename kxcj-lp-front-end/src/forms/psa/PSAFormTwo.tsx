import { FormWrapper } from "../../lib/FormWrapper";

type PSAData = {
  organization: string;
  phone: string;
};

type PSAFormProps = {
  organization: string;
  phone: string;
  updateFields: (fields: Partial<PSAData>) => void;
};

export function PsaFormTwo({
  organization,
  phone,

  updateFields,
}: PSAFormProps) {
  return (
    <FormWrapper title="Info about your ">
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
