import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  variant?: "standard" | "outlined" | "filled";
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size,
  variant,
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant={variant || "outlined"}
          size={size || "small"}
          fullWidth={fullWidth || false}
        />
      )}
    />
  );
};

export default PHInput;
