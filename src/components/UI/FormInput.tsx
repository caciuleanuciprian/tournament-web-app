import React from "react";

import styles from "./UI.module.css";

const FormInput = React.forwardRef((props: any, ref) => {
  return (
    <>
      <label className={`${styles.label}`}>{props.label}</label>
      <input className={styles.input} type={props.type} {...props} ref={ref} />
    </>
  );
});
export default FormInput;
