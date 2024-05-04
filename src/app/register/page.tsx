"use client";

import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { loginUser } from "@/services/actions/loginUser";
import { registerPatient } from "@/services/actions/registerPatient";
import { storeUserInfo } from "@/services/auth.service";
import { modifyPayloadData } from "@/utils/modifyPayloadData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// interface IPatientData {
//   name: string;
//   email: string;
//   contactNumber: string;
//   address: string;
// }
// interface IPatientRegisterFormData {
//   password: string;
//   patient: IPatientData;
// }

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please provide your name"),
  email: z.string().email("Please provide a valid email address"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid contact number"),
  address: z.string().min(2, "Please provide your address"),
});

export const validationSchema = z.object({
  password: z.string().min(4, "Password must be at least 4 characters"),
  patient: patientValidationSchema,
});

export const patientDefaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  // register handler function
  const handleRegistration = async (values: FieldValues) => {
    const modifiedData = modifyPayloadData(values);

    try {
      const res = await registerPatient(modifiedData);

      if (res.success) {
        toast.success(res.message);
        // login user after registration
        const response = await loginUser({
          password: values.password,
          email: values.patient.email,
        });
        if (response.success) {
          storeUserInfo(response.data.accessToken);
          router.push("/");
        }
      } else {
        setError(res.message);
        console.log(error);
      }
    } catch (error: any) {
      console.log(error.message);
    }
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

          {/* error message */}
          <Box>
            {error && (
              <Typography
                component="p"
                color="error"
                fontWeight={300}
                textAlign="center"
                sx={{
                  margin: "10px 0px",
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {error}
              </Typography>
            )}
          </Box>

          {/* form */}
          <Box>
            <PHForm
              onSubmit={handleRegistration}
              resolver={zodResolver(validationSchema)}
              defaultValues={patientDefaultValues}
            >
              <Grid container spacing={3} my={1}>
                {/* name  */}
                <Grid item md={12}>
                  <PHInput name="patient.name" label="Name" fullWidth />
                </Grid>

                {/* email  */}
                <Grid item md={6}>
                  <PHInput
                    name="patient.email"
                    label="Email"
                    type="email"
                    fullWidth
                  />
                </Grid>

                {/* password  */}
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </Grid>

                {/* Contact no  */}
                <Grid item md={6}>
                  <PHInput
                    name="patient.contactNumber"
                    label="Contact No."
                    type="tel"
                    fullWidth
                  />
                </Grid>

                {/* address  */}
                <Grid item md={6}>
                  <PHInput
                    name="patient.address"
                    label="Address"
                    type="text"
                    fullWidth
                  />
                </Grid>
              </Grid>

              {/* register button  */}
              <Box mt={5} mb={5}>
                <Button fullWidth type="submit">
                  Register
                </Button>
              </Box>
            </PHForm>

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
