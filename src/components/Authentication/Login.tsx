import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormInput } from "../../types/ILoginFormInput";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { setCookie } from "../../utils/cookieUtils";

import styles from "./Form.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ILoginFormInput>();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => handleLogin(data);
  const handleLogin = (data: any) => {
    try {
      axios
        .post(
          import.meta.env.VITE_API_LINK + "/auth/authenticate",
          data,
          config
        )
        .then((res) => {
          setCookie("auth_by_cookie", res.data.token, 1);
          setCookie("current_user", res.data.username, 1);
          alert("Logged in successfully");
          // location.href = "/profile";
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* TODO Add form validation based on server response */}
      <h1 className={styles.form_title}>Login</h1>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <FormInput label={"username"} type="text" {...register("username")} />

        <FormInput
          label={"password"}
          type="password"
          {...register("password")}
        />

        <div className={styles.btn_container}>
          <Button type="submit" text="login" className={styles.button} />
          <Button
            type="button"
            text="register"
            className={styles.button}
            onClick={() => navigate("/register")}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
