import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "./IFormInput";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";

import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data); // TODO Change this to send data to the server

  return (
    <>
      <h1 className={styles.form_title}>Register</h1>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label={"last Name"}
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className={styles.error}>This field is required.</span>
        )}
        <FormInput
          label={"last Name"}
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className={styles.error}>This field is required.</span>
        )}
        <FormInput
          label={"email"}
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className={styles.error}>This field is required.</span>
        )}
        <FormInput
          label={"username"}
          type="text"
          {...register("user", { required: true })}
        />
        {errors.password && (
          <span className={styles.error}>This field is required.</span>
        )}
        <FormInput
          label={"password"}
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && (
          <span className={styles.error}>
            This field has a minimum requirement of 8 characters.
          </span>
        )}
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
