'use client'

import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="search doctors" />
      </Stack>
      {/* {!isLoading ? (
      <Box my={2}>
        <DataGrid rows={doctors} columns={columns} />
      </Box>
    ) : (
      <h1>Loading.....</h1>
    )} */}
    </Box>
  );
};

export default DoctorsPage;
