import React from "react";
import style from "./Signedup.module.scss";
import box from "../../assets/box.svg";

function Signedup() {
  return (
    <div className={style.signcontainer}>
      <img src={box} />
      <h1>Check your Mailbox !</h1>
      <h2>
        We've sent an email to seyi@zojatech.com with <br></br> an OTP to
        confirm your account. Check your <br></br> inbox to activate your
        account
      </h2>
      <button className={style.signbtn}>Confirm Email</button>
      <span className={style.signid2}>
        Didn't get the mail? <span className={style.spantext}>Resend </span>{" "}
      </span>
    </div>
  );
}

export default Signedup;
