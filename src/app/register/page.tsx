"use client";

import assets from "@/assets";
import { modifyPayloadData } from "@/utils/modifyPayloadData";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();

  const onSubmit: SubmitHandler<IPatientRegisterFormData> = (values) => {
    const modifiedData = modifyPayloadData(values);

    // console.log(modifiedData);
  };

  
  return (
    <Container>
      <Stack
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 4,
          }}
        >
          {/* name logo  */}
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box mb={1}>
              <Image src={assets.svgs.logo} width={70} height={70} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          {/* form */}
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3} my={1}>
                {/* name  */}
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.name")}
                  />
                </Grid>

                {/* email  */}
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    fullWidth
                    {...register("patient.email")}
                  />
                </Grid>

                {/* password  */}
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("password")}
                  />
                </Grid>

                {/* Contact no  */}
                <Grid item md={6}>
                  <TextField
                    label="Contact No."
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.contactNumber")}
                  />
                </Grid>

                {/* address  */}
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>

              {/* register button  */}
              <Box mt={5} mb={5}>
                <Button fullWidth type="submit">
                  Register
                </Button>
              </Box>
            </form>

            <Typography
              component="p"
              fontWeight={400}
              textAlign="center"
              color="gray"
            >
              Do you already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
