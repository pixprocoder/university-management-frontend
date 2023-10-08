import { ReactElement, ReactNode } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

// Types
type FormConfig = {
  defaultValues?: Record<string, any>;
};
type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues }: FormProps) => {
  const methods = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}></form>
    </FormProvider>
  );
};

export default Form;
