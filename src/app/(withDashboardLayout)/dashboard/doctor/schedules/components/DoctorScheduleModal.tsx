import PHModal from "@/components/Shared/PHModal/PHModal";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import MultipleSelectFieldChip, { TSchedules } from "./MultipleSelectFieldChip";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";


type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};




const DoctorScheduleModal = ({ open, setOpen }: TProps) => {


  // states
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );
  const [selectedSchedulesIds, setSelectedSchedulesIds] = useState<string[]>(
    []
  );

//   console.log(selectedSchedulesIds);


  //   query
  const query: Record<string, any> = {};
  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }



  //   call api
  const [createDoctorSchedule, {isLoading:loading}] = useCreateDoctorScheduleMutation();
  const { data, isLoading } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;



//   create doctor schedules 
  const onSubmit = async () => {
    try {
        const res = await createDoctorSchedule({scheduleIds:selectedSchedulesIds}).unwrap();
        // console.log(res);
        if (res?.count>0) {
          toast.success("Schedules created successfully!");
          setOpen(false);
        }
      } catch (err: any) {
        console.error(err.message);
      }
  };



  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction={"column"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
          />
        </LocalizationProvider>
        <MultipleSelectFieldChip
          schedules={schedules}
          selectedScheduleIds={selectedSchedulesIds}
          setSelectedSchedulesIds={setSelectedSchedulesIds}
        />
         <LoadingButton
          size="medium"
          color="secondary"
          onClick={onSubmit}
          loading={loading}
          loadingIndicator="Submitting..."
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Stack>
    </PHModal>
  );
};

export default DoctorScheduleModal;
