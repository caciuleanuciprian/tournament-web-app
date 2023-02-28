interface Tournament {
  id: number;
  teams: string[];
  matchups: string[];
  startDate: Date;
  winner: string;
  endDate: Date;
  game: string;
  capacity: number;
  prize: number;
  creator: string;
}

const Tournament = () => {
  return (
    <div>
      <h1>Tournament</h1>
    </div>
  );
};

export default Tournament;
