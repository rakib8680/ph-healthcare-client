"use client";

import { Box, Button, IconButton } from "@mui/material";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "sonner";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { TSchedule } from "@/types/schedule";



const DoctorSchedules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});

  const doctorSchedules = data?.doctorSchedules;
  const meta = data?.meta;


  useEffect(() => {
    const updatedData = doctorSchedules?.map((schedule: any, index: number) => {
      return {
        sl: index + 1,
        id: schedule.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updatedData);
  }, [doctorSchedules]);




  // delete Doctor Schedule function
  const handleDelete = async (id: string) => {
    try {
      //   const res = await deleteSchedule(id).unwrap();
      //   if (res?.id) {
      //     toast.success("Doctor Deleted Successfully");
      //   }
    } catch (error: any) {
      console.log(error.message);
    }
  };



  
  //columns
  const columns: GridColDef[] = [
    { field: "sl", headerName: "Serial No."},
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(row.scheduleId)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={allSchedule ?? []} columns={columns} />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedules;
