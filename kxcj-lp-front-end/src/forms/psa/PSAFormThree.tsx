import { FormWrapper } from "../../lib/FormWrapper";

type PSAData = {
  useThrough: string;
  time10: string;
  time30: string;
  announcement: string;
};

type PSAFormProps = {
  useThrough: string;
  time10: string;
  time30: string;
  announcement: string;
  updateFields: (fields: Partial<PSAData>) => void;
};

export function PsaFormThree({
  useThrough,
  time10,
  time30,
  announcement,
  updateFields,
}: PSAFormProps) {

  return (
    <FormWrapper title="">
      
      <label>Use Through Date</label>
      <input
        min={1}
        type="string"
        value={useThrough}
        onChange={(e) => updateFields({ useThrough: e.target.value })}
        name="use through date"
      ></input>
      <label>Ten Second PSA</label>
      <input
        id="ten"
        type="radio"
        value={time10}
        onChange={(e) => updateFields({ time10: e.target.value })}
        name="ten seconds"
      ></input>
      <label>Thirty Second PSA</label>
      <input
        id="thirty"
        type="radio"
        value={time30}
        onChange={(e) => updateFields({ time30: e.target.value })}
        name="thirty seconds"
      ></input>
      <label>Your Announcement</label>
      <textarea rows={10} cols={50} name="announcement" value={announcement} onChange={(e) => updateFields({ announcement: e.target.value })}>
      </textarea>
    </FormWrapper>
  );
}
