import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import Container from "../components/UI/Container";
import Column from "../components/UI/Column";

import { useLocation } from "react-router-dom";

import styles from "./Authentication.module.css";

const Authentication = () => {
  const location = useLocation();
  return (
    <Container className={styles.container}>
      {location.pathname === "/register" ? (
        <Column className={styles.column}>
          <Register />
        </Column>
      ) : (
        <Column className={styles.column}>
          <Login />
        </Column>
      )}
    </Container>
  );
};

export default Authentication;
