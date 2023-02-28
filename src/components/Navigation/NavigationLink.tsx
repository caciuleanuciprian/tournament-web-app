import styles from "./Navigation.module.css";

const NavigationLink: React.FC<{
  text: string;
  onClick: any;
  className: string;
}> = ({ text, onClick, className }) => {
  return (
    <li className={styles.navigation_item}>
      <a className={`${styles.navigation_link} ${className}`} onClick={onClick}>
        {text}
      </a>
    </li>
  );
};

export default NavigationLink;
