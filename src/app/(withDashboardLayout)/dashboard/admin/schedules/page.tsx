'use client'
import { Box, Button } from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useState } from "react";





const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  return (
    <Box>
    <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display Schedule</Box>
    {/* {isLoading ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    ) : (
      <Box my={3}>
        <DataGrid rows={doctors} columns={columns} />
      </Box>
    )} */}
  </Box>
  )
};

export default SchedulesPage; 