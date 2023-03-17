import styles from "./Navigation.module.css";
import Logo from "../UI/Logo";

import NavigationLink from "./NavigationLink";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookieUtils";

const Navigation = () => {
  const [currentActive, setCurrentActive] = useState<number>(); // BUG If entering manual URL the active link is not set (maybe useContext or Redux to handle class changes based on current URL)
  const [userState, setUserState] = useState<string>(
    getCookie("current_user") ? "profile" : "login" // TODO Profile will be changed to the basic circle with image
  );
  const navigate = useNavigate();
  const links = ["home", "tournaments", "about", "support", userState];
  return (
    <nav className={styles.navigation}>
      <Logo
        onClick={() => {
          navigate("/");
          setCurrentActive(0);
        }}
      />
      <ul className={styles.navigation_list}>
        {links.map((link, index) => {
          return (
            <NavigationLink
              key={index}
              text={link}
              onClick={() => {
                setCurrentActive(index);
                navigate(index === 0 ? "/" : `/${link}`);
              }}
              className={
                currentActive === index ? styles.navigation_link_active : ""
              }
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
