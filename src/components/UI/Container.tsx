import styles from "./UI.module.css";

const Container = (props: any) => {
  return (
    <div className={`${props.className} ${styles.container}`}>
      {props.children}
    </div>
  );
};

export default Container;
