import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  variant?: "standard" | "outlined" | "filled";
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const PHInput = ({
  name,
  label,
  type,
  size,
  variant,
  fullWidth,
  sx,
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type || "text"}
          variant={variant || "outlined"}
          size={size || "small"}
          fullWidth={fullWidth || false}
          placeholder={placeholder || label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHInput;
