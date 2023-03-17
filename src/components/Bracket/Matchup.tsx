import { Participant } from "../../types/Participant";
import ParticipantDetails from "./ParticipantDetails";

import styles from "./Bracket.module.css";

const Matchup: React.FC<{
  participant1: Participant;
  participant2: Participant;
  matchId: number;
  winner: any;
  loser: any;
  tournamentId: number;
}> = ({ participant1, participant2, matchId, winner, loser, tournamentId }) => {
  console.log(winner);
  return (
    <div className={styles.matchup}>
      <div className={styles.dividerLeft}></div>
      <ParticipantDetails
        id={participant1 ? participant1.id : 0}
        name={participant1 ? participant1.name : "TBD"}
        isWinner={
          winner ? (winner.id === participant1.id ? true : false) : false
        }
        tournamentId={tournamentId}
        matchId={matchId}
      />
      <ParticipantDetails
        id={participant2 ? participant2.id : 0}
        name={participant2 ? participant2.name : "TBD"}
        isWinner={
          winner ? (winner.id === participant2.id ? true : false) : false
        }
        tournamentId={tournamentId}
        matchId={matchId}
      />
      <div className={styles.dividerRight}></div>
      <div className={styles.dividerVertical}></div>
    </div>
  );
};

export default Matchup;
