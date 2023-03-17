import Column from "../UI/Column";
import Matchup from "./Matchup";

import styles from "./Bracket.module.css";

const Bracket = (props: any) => {
  return (
    <div className={styles.bracket}>
      {props
        ? Object.entries(props.participants).map(([key, value]: any) => {
            return (
              <>
                <Column key={key} className={styles.bracketColumn}>
                  {value.map((matchup: any, index: any) => {
                    console.log(value);
                    return (
                      <Matchup
                        key={index}
                        matchId={matchup.id}
                        tournamentId={props.tournamentId}
                        winner={matchup.winner}
                        loser={matchup.loser}
                        participant1={matchup.team1}
                        participant2={matchup.team2}
                      />
                    );
                  })}
                  <div className={styles.dividerVertical}></div>
                </Column>
              </>
            );
          })
        : null}
    </div>
  );
};

export default Bracket;
