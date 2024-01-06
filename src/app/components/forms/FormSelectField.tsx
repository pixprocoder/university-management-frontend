"use client";
import { useFormContext, Controller, SubmitHandler } from "react-hook-form";
import { Input, Select } from "antd";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  options,
  defaultValue,
  label,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
