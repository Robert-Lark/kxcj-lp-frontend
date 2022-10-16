import { FormWrapper } from "./FormWrapper";

type BecomeDjData = {
  DJName: string;
  Style: string;
  CoHosts: string;
  Phone: string;
};

type BecomeDjProps = {
  DJName: string;
  Style: string;
  CoHosts: string;
  Phone: string;
  updateFields: (fields: Partial<BecomeDjData>) => void;
};

export function BecomeDjForm({
  DJName,
  Style,
  CoHosts,
  Phone: string,
  updateFields,
}: BecomeDjProps) {
  return (
    <FormWrapper title="">
      <label>DJ Name</label>
      <input autoFocus required type="text"></input>
      <label>Style of music</label>
      <input required type="text"></input>
      <label>Co-Hosts</label>
      <input type="text"></input>
      <label>Phone number</label>
      <input required min={8} type="number"></input>
    </FormWrapper>
  );
}
