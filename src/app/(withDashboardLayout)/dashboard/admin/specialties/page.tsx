"use client";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data: AllSpecialties, isLoading } = useGetAllSpecialtiesQuery({});


  const handleDelete = (id:string) =>{
    console.log(id);
  }


  //columns
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.icon} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: ({row}) => {
        return (
          <IconButton aria-label="delete" onClick={()=>handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

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
        <Box my={3}>
          <DataGrid rows={AllSpecialties} columns={columns} />
        </Box>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
