import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("lucas"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("lucas")} />
      <input {...register("exampleRequired", { required: true })} />
      <button type="submit">done</button>
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
};

export default App;
