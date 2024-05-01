import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official, ",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official, ",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official, ",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui official, ",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box pb={10}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          my={5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* left side  */}
          <Grid item md={6}>
            {/* first award  */}
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "25px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "35%",
                }}
              >
                <Image src={servicesData[0].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h5" component="h5" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography variant="body1" color="gray" fontWeight={300}>
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>

            {/* second award  */}
            <Box
              sx={{
                display: "flex",
                margin: "20px 0",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "25px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "35%",
                }}
              >
                <Image src={servicesData[1].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h5" component="h5" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography variant="body1" color="gray" fontWeight={300}>
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>

            {/* third award  */}
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "25px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "35%",
                }}
              >
                <Image src={servicesData[2].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h5" component="h5" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography variant="body1" color="gray" fontWeight={300}>
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>

            {/* fourth award  */}
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "25px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "35%",
                }}
              >
                <Image src={servicesData[3].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h5" component="h5" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography variant="body1" color="gray" fontWeight={300}>
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* right side  */}
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={chooseUsImg} width={500} alt="choose us image" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
