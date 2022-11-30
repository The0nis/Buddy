import React from "react";
import style from "./Verifyemail.module.scss";
import email from "../../assets/email.svg";

const Verifyemail = () => {
  return (
    <div className={style.container}>
      <img src={email} alt="" />
      <h1 className={style.Email}>Email verified !</h1>
      <h2 className={style.Email - 1}>
        The verified Email address will be associated with <br></br> your
        account. Click on the button below to continue
      </h2>
      <button className={style.btn}>Continue</button>
    </div>
  );
};

export default Verifyemail;
