import { ReactNode } from "react";
import "../styles/form.css";
type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div className="form">
      <h2 className="formHeading">{title}</h2>
      <div className="formContent">{children}</div>
    </div>
  );
}
