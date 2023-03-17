import Container from "../UI/Container";
import Table from "../Table/Table";
import axios from "axios";

import styles from "./Tournaments.module.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Tournament } from "../../types/Tournament";
import { useState } from "react";
import Loader from "../UI/Loader";
import { toast } from "react-toastify";

const TournamentsList = () => {
  const navigate = useNavigate();
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  const fields = ["Name", "Game", "Capacity", "Creator"];
  if (tournaments.length === 0) {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/tournaments`, {
        params: { page: 0, size: 10 },
      })
      .then((res) => {
        setTournaments(res.data);
      })
      .catch((err) => {
        toast.error("Error while fetching tournaments.");
      });
  }
  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Tournaments List</h1>
      <Button
        type="button"
        text="New Tournament"
        icon={faEnvelope}
        iconClassName={styles.icon}
        className={styles.button}
        onClick={() => navigate("/tournaments/new")}
      />
      {tournaments.length > 0 ? (
        <Table fields={fields} entries={tournaments} />
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default TournamentsList;
