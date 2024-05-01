import assets from "@/assets";
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

const RegisterPage = () => {
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
            <form>
              <Grid container spacing={3} my={1}>
                {/* name  */}
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
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
                  />
                </Grid>
              </Grid>

              {/* register button  */}
              <Box mt={5} mb={5}>
                <Button fullWidth>Register</Button>
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
