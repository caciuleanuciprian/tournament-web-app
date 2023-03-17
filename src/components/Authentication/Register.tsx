import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormInput } from "../../types/IRegisterFormInput";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { setCookie } from "../../utils/cookieUtils";
import { toast } from "react-toastify";

import styles from "./Form.module.css";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>();
  const onSubmit: SubmitHandler<IRegisterFormInput> = (data) =>
    handleRegister(data);

  const handleRegister = (data: any) => {
    axios
      .post(import.meta.env.VITE_API_LINK + "/auth/register", data, config)
      .then((res) => {
        setCookie("auth_by_cookie", res.data.token, 1);
        setCookie("current_user", res.data.username, 1);
        toast.success(
          "Register successful! You will be redirected to your profile page in 5 seconds."
        );
        setTimeout(() => {
          location.href = "/profile";
        }, 3000);
      })
      .catch((err) => {
        toast.error("There was an error with your registration form!");
        console.log(err);
      });
  };

  return (
    <>
      {/* TODO Add form validation based on server response */}
      <h1 className={styles.form_title}>Register</h1>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.doubleInputs}>
          <FormInput
            label={"first Name"}
            type="text"
            {...register("firstName", { required: true })}
            smallInput={true}
          />

          <FormInput
            label={"last Name"}
            type="text"
            {...register("lastName", { required: true })}
          />
        </div>
        <FormInput
          label={"email"}
          type="email"
          {...register("email", { required: true })}
        />
        <div className={styles.doubleInputs}>
          <FormInput
            label={"username"}
            type="text"
            {...register("username", { required: true })}
            smallInput={true}
          />

          <FormInput
            label={"password"}
            type="password"
            {...register("password", { required: true, minLength: 8 })}
          />
        </div>
        <div className={styles.btn_container}>
          <Button type="submit" text="register" className={styles.button} />
          <Button
            type="button"
            text="back to login"
            className={styles.button}
            onClick={() => navigate("/login")}
          />
        </div>
      </form>
    </>
  );
};

export default Register;
