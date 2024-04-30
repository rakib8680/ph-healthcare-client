import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17 26 34)" py={5}>
      <Container>
        <Stack direction="row"  justifyContent='center' gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngo">
            NGOs
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
