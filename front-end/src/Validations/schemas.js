import * as yup from "yup";

const registerSchema = yup.object().shape({
  nickname: yup.string().required("this field is required"),
  first_name: yup.string().required("this field is required"),
  last_name: yup.string().required("this field is required"),
  birth: yup.date().required("this field is required"),
  city: yup.string().required("this field is required"),
  mail: yup.string().email().required("this field is required"),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required("Choose a password between 8 and 16 characters"),
  confirm_password: yup.string().required("Password must match"),
});

const accountEditSchema = yup.object().shape({
  first_name: yup.string().required("this field is required"),
  last_name: yup.string().required("this field is required"),
  user_status: yup.string().max(32).required("this field is required"),
});
export { registerSchema, accountEditSchema };
