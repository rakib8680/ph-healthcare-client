import DashedLine from "@/components/Ui/Doctor/DashedLine";
import DoctorCard from "@/components/Ui/Doctor/DoctorCard";
import ScrollCategory from "@/components/Ui/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, Container } from "@mui/material";
import React from "react";

interface PropType {
  searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {
  let res;

  if (searchParams.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctor?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctor");
  }

  const { data } = await res.json();

  // console.log(data);

  return (
    <Container
      sx={{
        pt: 4,
        pb: 20,
      }}
    >
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          p: 2,
          mt: 2,
          width: "fit-content",
          borderRadius: 2,
        }}
      >
        <ScrollCategory specialties={searchParams.specialties} />
      </Box>

      <Box sx={{ mt: 2, p: 3, bgcolor: "#F5F5F5" }}>
        {data?.map((doctor: Doctor, index: number) => (
          <Box key={doctor.id}>
            <DoctorCard doctor={doctor} />

            {index === data.length - 1 ? null : <DashedLine />}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Doctors;
