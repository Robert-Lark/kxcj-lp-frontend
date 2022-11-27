import { FormWrapper } from "./FormWrapper";

type UserData = {
  name: string,
  email: string;
};

type FormProps = {
  name: string;
  email: string;
  updateFields: (fields: Partial<UserData>) => void;
};

export function ContactForm({
  name,
  email,
  updateFields,
}: FormProps) {
  return (
    <FormWrapper title="Contact">
      <label>Name</label>
      <input
        autoFocus
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      ></input>
      <label>Email </label>
      <input
        required
        type="text"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      ></input>
    </FormWrapper>
  );
}
