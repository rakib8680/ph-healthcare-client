import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type TSpecialty = {
  id: string;
  title: string;
  icon: string;
};

const Specialties = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  // console.log(specialties);

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments across Specialties
          </Typography>
          <Typography fontWeight={300} fontSize="18px" component="p">
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>
        <Stack direction="row" gap={5} mt={5}>
          {specialties?.map((specialty: TSpecialty) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "50px 15px",
                position: "relative",
                "& img": {
                  width: "60px",
                  height: "60px",
                  margin: "0 auto",
                  position: "absolute", // Set image position to absolute
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Center image
                },
                "&:hover": {
                  border: "1px solid #1586FD",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  "& img": {
                    width: "70px",
                    height: "70px",
                    transition: "all 0.4s ease",
                  },
                },
              }}
            >
              <Image
                src={specialty.icon}
                height={100}
                width={100}
                alt="specialty icon"
              />
              <Box mt={2} pt="70px">
                {" "}
                {/* Add top padding */}
                <Typography fontWeight={600} fontSize="18px" component="p">
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          component={Link}
          href="/specialties"
          variant="outlined"
          sx={{
            mt: 5,
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialties;
