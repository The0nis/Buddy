import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Otp.module.css";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const userid = "anyuser@Zojatech.com";

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className={style.content}>
        <h2>Verify your email</h2>
        <p>
          A four digit OTP code has been sent to your email{" "}
          <span className={style.changetxt}>{userid}</span>
        </p>

        <div className={style.getotp}>
          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <div className={style.entered}>
          <p>OTP Entered - {otp.join("")}</p>
        </div>

        <div className={style.btndiv}>
          <button
            className={style.btn}
            onClick={(e) => alert("Entered OTP is " + otp.join(""))}
          >
            Confirm
          </button>
        </div>

        <div className={style.footer}>
          <div className={style.left}>
            <p>Didn’t get the mail?</p>
          </div>

          <div className={style.right}>
            <Link>Resend</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
