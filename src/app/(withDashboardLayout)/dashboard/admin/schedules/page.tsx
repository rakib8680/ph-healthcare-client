"use client";
import { Box, Button, CircularProgress, IconButton } from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useEffect, useState } from "react";
import { useDeleteScheduleMutation, useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import { dateFormatter } from "@/utils/dateFormatter";
import { TSchedule } from "@/types/schedule";
import dayjs from "dayjs";



const SchedulesPage = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  const { data, isLoading } = useGetAllSchedulesQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation();

  const schedules = data?.schedules;
  const meta = data?.meta;


  useEffect(() => {
    const updatedData = schedules?.map((schedule: TSchedule) => {
      return {
        id: schedule.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updatedData);
  }, [schedules]);




  // delete Doctors function
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSchedule(id).unwrap();
      if (res?.id) {
        toast.success("Doctor Deleted Successfully");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };





  //columns
  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(row.id)}
            >
              <DeleteIcon sx={{ color: "red" }} />
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
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display Schedule</Box>
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
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      )}
    </Box>
  );
};

export default SchedulesPage;
