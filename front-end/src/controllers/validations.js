import * as yup from "yup";

const registerSchema = yup.object().shape({
  nickname: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  birth: yup.date().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  mail: yup.string().email().required(),
  phone: yup.number().required().positive().integer().min(11),
  password: yup.string().required(),
  rePassword: yup.string().required(),
});

const registerValidation = async (userInputs) => {
  const isValid = await registerSchema.isValid(userInputs);
  if (isValid) {
    console.log("Valid");
  } else {
    const error = new yup.ValidationError();
    console.log(error);
  }
};

export { registerValidation };
