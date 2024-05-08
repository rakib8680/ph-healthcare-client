
'use client'
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {data:AllSpecialties, isError, isLoading} = useGetAllSpecialtiesQuery({});

console.log(isLoading);

  return (
    <Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={()=>setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />  
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      <Box>
        <h1>Display Specialties</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
