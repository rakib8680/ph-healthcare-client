import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      {/* left box */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography fontWeight={600} variant="h2" component="h1">
          Healthier Hearts
        </Typography>
        <Typography fontWeight={600} variant="h2" component="h1">
          Come From
        </Typography>
        <Typography
          color="primary.main"
          fontWeight={600}
          variant="h2"
          component="h1"
        >
          Preventive Care
        </Typography>
        <Typography
          fontWeight={400}
          variant="h6"
          component="p"
          sx={{
            width: "45%",
            my: 4,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quo
          quibusdam quaerat reprehenderit deleniti modi obcaecati ab molestias
          soluta cum, repellendus nobis non aliquam sint eligendi. Ipsa dolore.
        </Typography>
        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            marginLeft: 5,
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* right box  */}
      <Box>Right</Box>
    </Container>
  );
};

export default HeroSection;
