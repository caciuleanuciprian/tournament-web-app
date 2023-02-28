import styles from "./UI.module.css";

const Card = (props: any) => {
  return (
    <div className={styles.card} onClick={props.onClick}>
      <div className={styles.card_overlay}></div>
      <img className={styles.card_img} src={props.img} alt="" />
      <div className={styles.card_text}>
        <h3 className={styles.card_title}>{props.title}</h3>
        <p className={styles.card_description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
