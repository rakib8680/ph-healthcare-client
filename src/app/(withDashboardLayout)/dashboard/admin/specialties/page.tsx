"use client";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns = [
  { field: "title", headerName: "Title", width: 100 },
  {
    field: "icon",
    headerName: "Icon",
    width: 100,
    renderCell: ({ row }) => {
      // console.log(row);
    },
  },
];

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    data: AllSpecialties,
    isError,
    isLoading,
  } = useGetAllSpecialtiesQuery({});

  // console.log(AllSpecialties);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      {isLoading ? (
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
        <Box>
          <DataGrid rows={AllSpecialties} columns={columns} />
        </Box>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
