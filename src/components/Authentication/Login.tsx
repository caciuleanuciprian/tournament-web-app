import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./IFormInput";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";

import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data); // TODO Change this to send data to the server

  return (
    <>
      <h1 className={styles.form_title}>Login</h1>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <FormInput label={"username"} type="text" {...register("user")} />
        <FormInput
          label={"password"}
          type="password"
          {...register("password")}
        />
        {/* TODO Add form validation based on server response */}
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
