"use client";

import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import { Box, CircularProgress, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import DoctorInformation from "../components/DoctorInformation";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "sonner";

const DoctorProfile = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const [updateProfile, { isLoading: updating }] = useUpdateMyProfileMutation();

  // console.log(data);

  // update profile handler
  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    try {
      const res = await updateProfile(formData).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Profile Photo Updated Successfully");
      }
    } catch (error) {}
  };

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
        <Grid xs={12} md={4}>
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

          {updating ? (
            <CircularProgress sx={{ display: "block", margin: "auto" }} />
          ) : (
            <AutoFileUploader
              name="file"
              label="Choose Your Profile Photo"
              icon={<CloudUploadIcon />}
              onFileUpload={fileUploadHandler}
            />
          )}
        </Grid>
        <Grid xs={12} md={8}>
          <DoctorInformation data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfile;
