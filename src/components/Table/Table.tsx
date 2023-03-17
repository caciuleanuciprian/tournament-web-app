import { Tournament } from "../../types/Tournament";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import { useNavigate } from "react-router-dom";

import styles from "./Table.module.css";

interface TableProps {
  fields: string[];
  entries: Tournament[];
  props?: any;
}

const Table = ({ props, fields, entries }: TableProps) => {
  const navigate = useNavigate();
  return (
    <table {...props} className={styles.table}>
      <TableHead className={styles.head}>
        <TableRow className={styles.row}>
          {fields.map((field, index) => {
            return (
              <TableHeader key={index} className={styles.header}>
                {field}
              </TableHeader>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map((entry: Tournament) => {
          return (
            <TableRow
              key={entry.id}
              className={`${styles.row} ${styles.clickableRow}`}
              onClick={() => navigate(`/tournaments/${entry.id}`)}
            >
              <TableCell className={styles.cell}>{entry.name}</TableCell>
              <TableCell className={styles.cell}>{entry.game}</TableCell>
              <TableCell className={styles.cell}>
                {entry.teams.length}
              </TableCell>
              <TableCell className={styles.cell}>{entry.username}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </table>
  );
};

export default Table;
