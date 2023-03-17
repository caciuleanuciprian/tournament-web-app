export interface ITournamentFormInput {
  name: string;
  teams: string[];
  username?: string;
  game?: string;
  capacity?: number;
  prize?: number;
  startDate?: Date;
  endDate?: Date;
}
