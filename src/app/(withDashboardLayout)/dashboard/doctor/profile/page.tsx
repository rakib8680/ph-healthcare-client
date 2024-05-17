"use client";

import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import { Box, Button, CircularProgress, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import DoctorInformation from "./components/DoctorInformation";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "sonner";
import ProfileUpdateModal from "./components/ProfileUpdateModal";
import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const DoctorProfile = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const [updateProfile, { isLoading: updating }] = useUpdateMyProfileMutation();

  // console.log(data);


  // update profile photo handler
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
    <>
      <ProfileUpdateModal open={isModalOpen} setOpen={setIsModalOpen} id={data?.id} />

      <Container>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>

            {/* profile  */}
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



            {/* upload profile photo */}
            {updating ? (
              <CircularProgress sx={{ display: "block", margin: "auto" }} />
            ) : (
              <AutoFileUploader
                sx={{ mt: 1 }}
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
              />
            )}



            {/* update modal button */}
            <Box my={2}>
              <Button
                endIcon={<ModeEditIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </Button>
            </Box>
          </Grid>



          {/* information  */}
          <Grid xs={12} md={8}>
            <DoctorInformation data={data} />
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default DoctorProfile;
