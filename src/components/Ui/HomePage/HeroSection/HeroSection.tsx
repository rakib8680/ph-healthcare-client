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
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        {/* arrow  */}
        <Box
          sx={{
            position: "absolute",
            left: "300px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>

        {/* doctor 1 & 2  */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>

        {/* doctor3  */}
        <Box
          sx={{
            position: "absolute",
            top: "230px",
            left: "230px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="doctor3"
          />
        </Box>

        {/* stethoscope  */}
        <Box
          sx={{
            position: "absolute",
            zIndex: -1,
            bottom: "-55px",
            right: "80px",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={190}
            height={190}
            alt="stethoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
