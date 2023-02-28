import styles from "./UI.module.css";

const Column = (props: any) => {
  return (
    <div className={`${styles.column} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Column;
