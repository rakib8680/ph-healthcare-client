'use client'

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";


type TParams = {
  params: {
    doctorId: string;
  };
};




const DoctorUpdatePage = ({ params }: TParams) => {

  const { doctorId } = params;



  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
      //   console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };




  const defaultValues = {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
  };




  return (
    <Box>
      <Typography component='h4' variant="h4">Update Doctor Info</Typography>
      <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>


          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="apointmentFee"
              type="number"
              label="apointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update</Button>
      </PHForm>
    </Box>
  );
};



export default DoctorUpdatePage;
