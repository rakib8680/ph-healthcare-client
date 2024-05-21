"use client";

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logOutUser } from "@/services/actions/logoutUser";



const validationSchema = z.object({
  oldPassword: z.string().min(4, "Must be at least 4 characters long"),
  newPassword: z.string().min(4, "Must be at least 4 characters long"),
});



const ChangePassword = () => {

  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();



  // change password handler
  const onSubmit = async (values: FieldValues) => {
    // console.log(values);
    try {
       const res = await changePassword(values).unwrap();
    //    console.log(res);
       if (res.status === 200) {
          logOutUser(router);
          toast.success('Password Changed Successfully');
       } else {
          throw new Error('Incorrect Old Password');
       }
    } catch (error) {
      toast.success("Incorrect Old Password");
      console.log(error);
    }
  };



  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        border: "1px solid #e0e0e0 ",
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>

      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          change Password
        </Button>
      </PHForm>
      
    </Box>
  );
};

export default ChangePassword;
