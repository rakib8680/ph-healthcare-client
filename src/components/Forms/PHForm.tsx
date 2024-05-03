import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    children : ReactNode,
    onSubmit: SubmitHandler<FieldValues>
}


const PHForm = ({children, onSubmit}:TFormProps) => {

    const methods = useForm()

    const submit:SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(submit)}>
      <input type="submit" />
    </form>
  </FormProvider>
  )
};

export default PHForm;