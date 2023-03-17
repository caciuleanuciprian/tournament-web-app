import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props: any) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      {props.icon ? (
        <FontAwesomeIcon
          className={props.iconClassName ? props.iconClassName : ""}
          icon={props.icon}
        />
      ) : (
        ""
      )}
      {props.text}
    </button>
  );
};

export default Button;
