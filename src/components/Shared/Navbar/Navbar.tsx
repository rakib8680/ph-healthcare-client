"use client";

import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const userInfo = getUserInfo();
  console.log(isLoggedIn());

  return (
    <Container>
      <Stack
        py={2}
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
        </Stack>

        {/* conditionally render login/logout button */}
        {userInfo?.userId ? (
          <Button color="error">LogOut</Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}

      </Stack>
    </Container>
  );
};

export default Navbar;
