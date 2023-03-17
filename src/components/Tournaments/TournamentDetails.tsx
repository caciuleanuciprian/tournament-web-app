import { useState } from "react";
import { Tournament } from "../../types/Tournament";
import { useParams } from "react-router-dom";
import Container from "../UI/Container";
import Bracket from "../Bracket/Bracket";

import styles from "./Tournaments.module.css";
import axios from "axios";
import Loader from "../UI/Loader";
import Button from "../UI/Button";

const TournamentDetails = () => {
  const params = useParams();
  const [tournament, setTournament] = useState<Tournament>();
  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/tournament/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setTournament(res.data);
      });
  };
  if (!tournament) {
    fetchData();
  }
  console.log(tournament);
  return (
    <Container>
      {tournament ? (
        <>
          <div className={styles.row}>
            <p className={styles.rowText}>{tournament.name}</p>
          </div>
          <div className={styles.rowDetails}>
            <div className={styles.col}>
              <p className={styles.tournamentText}>Details</p>

              <div>
                <div className={styles.highlight}>Game</div>
                <div className={styles.value}>{tournament.game}</div>
              </div>
              <div>
                <div className={styles.highlight}>Prize</div>
                <div className={styles.value}>
                  {tournament.prize ? tournament.prize : "100$"}
                </div>
              </div>
              <div>
                <div className={styles.highlight}>Creator</div>
                <div className={styles.value}>{tournament.username}</div>
              </div>
              <div>
                <div className={styles.highlight}>Winner</div>
                <div className={styles.value}>
                  {tournament.winner !== null ? tournament.winner?.name : "TBA"}
                </div>
              </div>
            </div>
          </div>
          <Bracket
            participants={tournament.matchups}
            tournamentId={params.id}
          />
          <Button
            className={styles.button}
            type="button"
            text="Save"
            onClick={() => fetchData()}
          />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default TournamentDetails;
