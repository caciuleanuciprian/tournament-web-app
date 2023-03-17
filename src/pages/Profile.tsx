import { useState } from "react";
import axios from "axios";
import { deleteCookie, getCookie } from "../utils/cookieUtils";
import Container from "../components/UI/Container";
import Loader from "../components/UI/Loader";
import { User } from "../types/User";
import FormInput from "../components/UI/FormInput";
import Table from "../components/Table/Table";
import styles from "./Profile.module.css";
import Button from "../components/UI/Button";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState<User>();
  const fields = ["Name", "Game", "Capacity", "Creator"];
  if (!user) {
    axios
      .get(
        `${import.meta.env.VITE_API_LINK}/users/${getCookie("current_user")}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("auth_by_cookie")}`,
          },
        }
      )
      .then((res) => {
        setUser(res.data);
      });
  }

  const logoutUser = () => {
    axios
      .post(`${import.meta.env.VITE_API_LINK}/auth/logout`, {})
      .then((res) => res);
    deleteCookie("auth_by_cookie");
    deleteCookie("current_user");
    toast.success("Logged out successfully!");
  };
  return (
    <Container>
      {user ? (
        <form className={styles.form} onSubmit={() => {}}>
          <div className={styles.doubleInputs}>
            <h1 className={styles.form_title}>Hello, {user.username}</h1>
            <FormInput
              label="First Name"
              defaultValue={user.firstName}
              type="text"
            />
            <FormInput
              label="Last Name"
              defaultValue={user.lastName}
              type="text"
            />
            <FormInput label="Email" defaultValue={user.email} type="email" />
            <Button className={styles.button} type="button" text="Save" />
            <Button
              onClick={() => logoutUser()}
              className={styles.button}
              type="button"
              text="Logout"
            />
            <p className={styles.table_title}>My Tournaments</p>
            <Table fields={fields} entries={user.tournaments} />
          </div>
        </form>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Profile;
