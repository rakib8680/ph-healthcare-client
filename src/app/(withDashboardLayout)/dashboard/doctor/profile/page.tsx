"use client";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: "bold",
  },
}));

const DoctorProfile = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);

  // console.log(data);

  if (isLoading) {
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <CircularProgress />
    </Box>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <Image
              src={data?.profilePhoto}
              height={300}
              width={400}
              alt="profile-photo"
            />
          </Box>
        </Grid>
        <Grid xs={8}>
          <>
            <Typography variant="h5" color="primary.main" mb={2}>
              Personal Information
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={2}
              flexWrap={"wrap"}
            >
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Role
                </Typography>
                <Typography>{data?.role}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Name
                </Typography>
                <Typography>{data?.name}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Email
                </Typography>
                <Typography>{data?.email}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Gender
                </Typography>
                <Typography>{data?.gender}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Designation
                </Typography>
                <Typography>{data?.designation}</Typography>
              </StyledInformationBox>
            </Stack>

            <Typography variant="h5" my={2} color={"primary.main"}>
              Professional Information
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              flexWrap={"wrap"}
              gap={2}
            >
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Anointment Fee
                </Typography>
                <Typography>{data?.apointmentFee}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Qualification
                </Typography>
                <Typography>{data?.qualification}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Current Working Place
                </Typography>
                <Typography>{data?.currentWorkingPlace}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Joined
                </Typography>
                <Typography>
                  {data
                    ? new Date(data.createdAt).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                      })
                    : null}
                </Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Current Status
                </Typography>
                <Typography>{data?.status}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  Average Rating
                </Typography>
                <Typography>{data?.averageRating}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography variant="caption" color="secondary">
                  experience
                </Typography>
                <Typography>{data?.experience}</Typography>
              </StyledInformationBox>
            </Stack>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfile;
