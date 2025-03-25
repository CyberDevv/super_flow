import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type FormInputType = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
  required?: boolean;
};

const FormInput = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  required,
}: FormInputType) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        type={type ?? "text"}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(event) => setValue(event?.target?.value)}
      />
    </div>
  );
};

export default FormInput;
