"use client";
import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { modifyPayloadData } from "@/utils/modifyPayloadData";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const SpecialtiesModal = ({ open, setOpen }: TProps) => {
  // create a new specialty
  const handleSubmit = (values: FieldValues) => {
    const data = modifyPayloadData(values);
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create a new Specialty">
      <PHForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 2,
          }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtiesModal;
