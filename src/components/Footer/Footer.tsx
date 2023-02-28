import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © 2023 <span className={styles.footer_highlight}>Competition Cave</span>
      </p>
    </footer>
  );
};

export default Footer;
