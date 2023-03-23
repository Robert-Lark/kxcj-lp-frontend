import { FormWrapper } from "./FormWrapper";
import "../styles/form.css";
type VolunteerData = {
  Name: string;
  Email: string;
  Reason: string;
  Phone: string;
};

type VolunteerProps = {
  Name: string;
  Email: string;
  Reason: string;
  Phone: string;
  updateFields: (fields: Partial<VolunteerData>) => void;
};

export function VolunteerForm({
  Name,
  Email,
  Reason,
  Phone: string,
  updateFields,
}: VolunteerProps) {
  return (
    <FormWrapper title="">
      <label>Name</label>
      <input autoFocus required type="text"></input>
      <label>Email</label>
      <input required type="text"></input>
      <label>Skills & Expectations</label>
      <textarea rows={4} cols={50} name=""></textarea>
      <label>Phone</label>
      <input required min={8} type="number"></input>
    </FormWrapper>
  );
}
