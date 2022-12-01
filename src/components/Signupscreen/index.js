import React, { useState } from "react";
import style from "./signupscreen.module.scss";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Signupscreen() {
  return (
    <div className={style.signcontainer}>
      <div className={style.signwrapper}>
        <form>
          <div className={style.signheader}>
            <h3>Register your account</h3>
          </div>

          <div className={style.signfield}>
            <div className={style.signfielda}>
              <div className={style.inputwrap}>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineMail className={style.signicons} />
                  Sign up with Email
                </button>
              </div>
            </div>

            <div className={style.signline}>
              <div className={style.signlinewid}>
                <hr />
              </div>
              <div>
                <p>or</p>
              </div>
              <div className={style.signlinewid}>
                <hr />
              </div>
            </div>
            <div className={style.signfield}>
              <div className={style.signfielda}>
                <div className={style.inputwrap}>
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FcGoogle className={style.signicons} />
                    Sign up with Google
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={style.signterms}>
            <p>
              By clicking the button above, you agree to our{" "}
              <span className={style.signchangetxt}>
                <Link>
                  Terms <br></br>of Service
                </Link>
              </span>{" "}
              and{" "}
              <span className={style.signchangetxt}>
                <Link>Privacy Policy.</Link>
              </span>
            </p>
          </div>
        </form>

        <div className={style.signfooter}>
          <div>
            <p>Already have an account?</p>
          </div>

          <div>
            <p>
              <Link to="/" className={style.signpointer}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupscreen;
