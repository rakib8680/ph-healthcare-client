"use client";

import useGetUserInfo from "@/hooks/useGetUserInfo";
import { logOutUser } from "@/services/actions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = useGetUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    logOutUser(router);
  };

  return (
    <Box
      sx={{
        bgcolor: "#cce5ff",
      }}
    >
      <Container>
        <Stack
          py={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* logo */}
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          {/* nav items  */}
          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography component={Link} href="/health-plans">
              Health Plans
            </Typography>
            <Typography component={Link} href="/medicine">
              Medicine
            </Typography>
            <Typography component={Link} href="/diagnostics">
              Diagnostics
            </Typography>
            <Typography component={Link} href="/ngo">
              NGOs
            </Typography>
            {userInfo?.userId && (
              <Typography component={Link} href="/dashboard">
                Dashboard
              </Typography>
            )}
          </Stack>

          {userInfo?.userId ? (
            <Button color="error" onClick={handleLogout}>
              LogOut
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
