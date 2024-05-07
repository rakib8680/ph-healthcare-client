
'use client'
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";

const SpecialtiesPage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={()=>setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />  
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
