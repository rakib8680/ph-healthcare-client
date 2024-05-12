"use client";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import { useDebounced } from "@/redux/hooks";
import EditIcon from "@mui/icons-material/Edit";


const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Queries
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }


  // Api Calling
  const [deleteDoctor] = useDeleteDoctorMutation();
  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const doctors = data?.doctors;
  const meta = data?.meta;
  // console.log(doctors);



  // delete Doctors function
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctor(id).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Doctor Deleted Successfully");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };



  //columns
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact No.", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
            <DeleteIcon sx={{color:'red'}} />
          </IconButton>
           <IconButton
           aria-label="edit"
           // onClick={}
         >
           <EditIcon sx={{ color: "primary.main" }} />
         </IconButton>
          </Box>
        );
      },
    },
  ];


  
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search doctors"
        />
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
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      )}
    </Box>
  );
};

export default DoctorsPage;
