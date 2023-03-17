import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import FormInput from "../components/UI/FormInput";
import Button from "../components/UI/Button";
import { config } from "../utils/axiosConfig";
import { ITournamentFormInput } from "../types/ITournamentFormInput";
import Container from "../components/UI/Container";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookieUtils";
import { toast } from "react-toastify";

import styles from "./CreateTournament.module.css";

const CreateTournament = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITournamentFormInput>();
  const onSubmit: SubmitHandler<ITournamentFormInput> = (data) =>
    handleCreateTournament(data);

  const splitTeams = (teams: string) => {
    const teamsArray = teams.split(",");
    const splitArray = teamsArray.map((team) => {
      return { name: team };
    });
    console.log(splitArray);
    return splitArray;
  };

  const handleCreateTournament = (data: any) => {
    data.teams = splitTeams(data.teams);
    axios
      .post(`${import.meta.env.VITE_API_LINK}/tournaments`, data, {
        headers: { Authorization: `Bearer ${getCookie("auth_by_cookie")}` },
      })
      .then((res) => {
        toast.success("Tournament created succesfully!");
        setTimeout(() => {
          navigate("/tournaments");
        }, 3000);
      })
      .catch((err) => {
        toast.error("There was an error creating your tournament!");
        console.log(err);
      });
  };

  return (
    <Container className={styles.container}>
      <Button
        type="button"
        text="back"
        onClick={() => {
          navigate("/tournaments");
        }}
        className={`${styles.back_button}`}
      ></Button>
      {getCookie("auth_by_cookie") ? (
        <div className={styles.form_container}>
          <h1 className={styles.form_title}>Create New Tournament</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              label={"tournament name"}
              type="text"
              {...register("name", { required: true })}
            />

            <FormInput label={"teams"} type="text" {...register("teams")} />

            <FormInput
              label={"creator"}
              type="text"
              defaultValue={getCookie("current_user")}
              readOnly={true}
              {...register("username")}
            />

            <FormInput label={"game"} type="text" {...register("game")} />

            <div className={styles.btn_container}>
              <Button type="submit" text="create" className={styles.button} />
            </div>
          </form>
        </div>
      ) : (
        <h1 className={styles.guest_text}>
          You need to be logged in to create a tournament
        </h1>
      )}
    </Container>
  );
};

export default CreateTournament;
