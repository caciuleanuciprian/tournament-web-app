export type Tournament = {
  id: number;
  name: string;
  teams: Array<{ id: number; name: string }>;
  matchups: Array<{ id: number; name: string }>;
  winner?: { id: number; name: string } | null;
  game: string;
  prize?: number;
  username: string;
};
