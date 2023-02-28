import Container from "../UI/Container";

import styles from "./Tournaments.module.css";

const TournamentsList = () => {
  const tournaments = [
    { name: "Tournament 1", id: 1 },
    { name: "Tournament 2", id: 2 },
  ];
  return (
    <Container className={styles.container}>
      <h1>Tournaments List</h1>
      {tournaments.map((tournament) => (
        <div key={tournament.id}>{tournament.name}</div>
      ))}
    </Container>
  );
};

export default TournamentsList;
