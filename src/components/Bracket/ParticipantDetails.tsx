import { Participant } from "../../types/Participant";
import styles from "./Bracket.module.css";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtils";

const ParticipantDetails = ({
  name,
  isWinner,
  tournamentId,
  matchId,
  id,
}: Participant) => {
  const updateWinner = async () => {
    await axios
      .put(
        `${import.meta.env.VITE_API_LINK}/tournaments`,
        {
          tournamentId: Number(tournamentId),
          matchupId: matchId,
          winnerId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie("auth_by_cookie")}`,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setIsWinnerParticipant(!isWinnerParticipant);
  };

  const [isWinnerParticipant, setIsWinnerParticipant] = useState(isWinner);
  return (
    <div
      onClick={() => updateWinner()}
      className={`${styles.participant} ${
        isWinnerParticipant ? styles.winner : styles.loser
      }`}
    >
      <p>{name}</p>
    </div>
  );
};

export default ParticipantDetails;
