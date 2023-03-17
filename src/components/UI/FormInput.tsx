import React from "react";

import styles from "./UI.module.css";

const FormInput = React.forwardRef((props: any, ref) => {
  return (
    <div
      className={`${styles.inputContainer} ${
        props.smallInput ? styles.smallInput : ""
      }`}
    >
      <label className={`${styles.label}`}>{props.label}</label>
      <input
        defaultValue={props.defaultValue}
        className={`${styles.input}`}
        type={props.type}
        {...props}
        ref={ref}
      />
    </div>
  );
});
export default FormInput;
