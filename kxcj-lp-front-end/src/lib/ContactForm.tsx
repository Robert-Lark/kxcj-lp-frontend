import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
};

type FormProps = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  updateFields: (fields: Partial<UserData>) => void;
};

export function ContactForm({
  firstName,
  lastName,
  emailAddress,
  updateFields,
}: FormProps) {
  return (
    <FormWrapper title="Contact">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      ></input>
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      ></input>
      <label>Email Address</label>
      <input
        required
        type="text"
        value={emailAddress}
        onChange={(e) => updateFields({ emailAddress: e.target.value })}
      ></input>
    </FormWrapper>
  );
}
