import styles from "./UI.module.css";
import logo from "../../assets/logo-white.svg";

const Logo = (props: any) => {
  return (
    <div className={styles.logo} onClick={props.onClick}>
      <img src={logo} alt="logo" className={styles.logo_image} />
    </div>
  );
};

export default Logo;
