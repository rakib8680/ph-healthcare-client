"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.service";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  // login handler function
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      if (res.success) {
        storeUserInfo(res.data.accessToken);
        toast.success(res.message);
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          {/* name and logo */}
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>

          <Box>
            {/* form */}
            <PHForm onSubmit={handleLogin}>
              {/* email  and password */}
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    size="small"
                    type="password"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              {/* login button */}
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
            </PHForm>

            <Typography component="p" fontWeight={300}>
              Don&apos;t have an account?{" "}
              <Link href="/register">Create an account</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
